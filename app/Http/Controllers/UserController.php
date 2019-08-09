<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Customs\MessageService;
use Exception;

class UserController extends Controller
{
    public function login(Request $request) 
    {
        $user = User::where([
            'email'=> $request->input('email')
        ])->first();

        if($user == null) {
            $user = User::create([
                'name' => $request->input('name'),
                'email'=> $request->input('email')
            ]);
            
            $user->user_image = $request->input('user_image');
            $user->save();
        }  

        $mobile_number = preg_match("/\b\d{10}\b/", $user->mobile_number) ? $user->mobile_number : '';
        return response()->json(['user_id'=>$user->id, 'mobile_number' => $mobile_number]);
    }


    public function saveMobileNumber(Request $request)
    {
        $user = User::where(['email'=>$request->input('email')])->first();

        $user->mobile_number = $request->input('mobile_number');
        $user->save();

        return response()->json(['saved'=>true]);
    }

    public function sendOtp(Request $request)
    {
        $mobile_number = $request->input('mobile_number');
        $otp = $request->input('otp');

        $user = User::find($request->input('user_id'));
        $user->otp = $otp;
        $user->save();

        $app_hash = $request->input('app_hash');

        try{
            $message = "<#> Foodyla: your OTP is $otp $app_hash";
            MessageService::sendMessageTo($mobile_number, $message);
            $status = 'success';
        } catch(Exception $e) {
            \Log::debug($e);
            $status = 'fail';
        }

        return response()->json(['status' => $status]);
    }


    public function confirmOtp(Request $request)
    {
        $user = User::find($request->input('user_id'));
        
        if ($user->otp == $request->input('otp')) {
            $user->mobile_number = $request->input('mobile_number');
            $user->save();
            $status = "success";
        } else {
            $status = "fail";
        }

        return response()->json(['status' => $status]);
    }
}
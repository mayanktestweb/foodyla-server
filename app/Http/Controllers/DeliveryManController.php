<?php

namespace App\Http\Controllers;

use App\DeliveryMan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class DeliveryManController extends Controller
{
    public function showRegister()
    {
        return view('register_delivery_man');
    }

    public function register(Request $request)
    {
        $dman = new DeliveryMan();

        $dman->name = $request->input('name');
        $dman->mobile_number = $request->input('mobile_number');
        $dman->address = $request->input('address');
        $dman->govt_id = $request->input('govt_id');
        $dman->password = md5($request->input('password'));

        $dman->save();

        return "Delivery Man registered successfully";
    }


    public function login(Request $request)
    {
        $password = md5($request->input('password'));
        $dman = DeliveryMan::where(['mobile_number'=>$request->input('mobile_number'), 
        'password'=>$password])->get()->first();

        if($dman) {
            $login_token = md5($dman->mobile_number.Carbon::now());
            $dman->login_token = $login_token;
            $dman->save();

            return response()->json(['status' => 'success', 'login_token' => $login_token]);
        } else {
            return response()->json(['status' => 'fail']);
        }
    }


    public function getAssignedOrders(Request $request)
    {
        $dman = DeliveryMan::where(['login_token' => $request->input('login_token')])->get()->first();

        $assignedOrders = $dman->orders;

        return response()->json(['orders' => $assignedOrders]);
    }
}

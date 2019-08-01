<?php

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/restaurants/{restaurant}/page", function() {
    sleep(2);
    return response()->json([
        ["South Indian"=>"manchurian"]
    ]);
});


Route::get("/spa/test", function(Request $request) {
    return $request->session()->get('name', 'nothing man');
});

Route::post("/spa/test", function(Request $request){
    $request->session()->put('name', $request->input('name'));
    return $request->session()->get('name');
});

Route::get("/test", function(Request $request){
    $varients = $request->input('varients');
    
    $toReturn = collect([]);

    foreach($varients as $varient) {
        $toReturn->put($varient, ['price'=> 50]);
    }
    
    return response()->json(['image'=>'', 'varients_data' => $toReturn]);
});

Route::get("/location", function(Request $request){
    \Log::debug("lat - ".$request->lat." long - ".$request->long);
    return "nawada, bhind, Bhind, Madhya Pradesh, India";
});

/////////////////////////////////
///
///   New Api Urls
///
/////////////////////////////////

Route::get('/user', 'UserController@login');

Route::get('/restaurants', 'RestaurantController@getRestaurants');

Route::get('/restaurants/page/{restaurant}', 'RestaurantController@loadRestaurantPage');

Route::post("/app/confirm_order", 'OrderController@registerOrder');

Route::get("/order_status", 'OrderController@getStatus');

Route::post('/app/confirm_mobile_number', 'UserController@sendOtp');

Route::post('/app/confirm_otp', 'UserController@confirmOtp');
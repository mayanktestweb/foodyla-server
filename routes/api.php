<?php

use Illuminate\Http\Request;

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

Route::get("/discount_coupons", 'UserController@getDiscountCoupons');

Route::get("/search", function() {
    return $killo->kom;
});




/////////////////////////////////
///
///   Delivery Api Urls
///
/////////////////////////////////

Route::post('/delivery/login', 'DeliveryManController@login');

Route::get('/delivery/assigned_orders', 'DeliveryManController@getAssignedOrders');

Route::get('/delivery/orders/details', 'OrderController@getOrderDetails');

Route::post("/delivery/orders/confirm_delivery", 'OrderController@confirmDelivery');

Route::get("/delivery/user_info", 'UserController@getInfo');

Route::post("/delivery/user/discount", 'UserController@issueDiscount');
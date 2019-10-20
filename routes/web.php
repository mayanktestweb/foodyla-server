<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/spa/{any?}', function() {
    return view('spa');
});

Route::get("/mobile/app/{any?}", function() {
    return view("spa");
});

Route::get("/restaurants/{id}/page", function(){
    return view('spa');
});

Route::get("/test", function(Request $req) {

    return view('test', ['name' => $req->session()->get('name', 'nothing man')]);
});

Route::post("/test", function(Request $req){
    $req->session()->put('name', $req->input('name'));
    return "Session Saved";
});

Route::get("/fakkad/test", function(){
    return view('spa');
});

Route::get("/app/set_location", function(){
    return view("spa");
});

Route::get("/app/set_location/manual", function() {
    return view("spa");
});

Route::get("/app/manager", function(){
    return view("spa");
});

Route::get("/app/add_mobile_number", function(){
    return view('spa');
});

Route::get("/app/payment", function(){
    return view('spa');
});

Route::get("/app/account", function() {
    return view("spa");
});

Route::get("/app/orders", function() {
    return view('spa');
});

Route::get("/app/landing_page", function() {
    return view('spa');
});

Route::get("/app/discount_coupons", function() {
    return view('spa');
});
////////////////////////////
///
///  Customer App Urls   
///
////////////////////////////

Route::get("/restaurants/add", 'RestaurantController@showAdd');

Route::post("/restaurants/add", 'RestaurantController@add');

Route::get("/restaurants", 'RestaurantController@showRestaurants');

Route::get("/restaurants/{restaurant}/dishes/add", 'RestaurantController@showAddDish');

Route::post("/restaurants/{restaurant}/dishes/add", 'RestaurantController@addDish');





/////////////////////////////
///
///  Delivery System
///
/////////////////////////////

Route::get("/delivery/register", "DeliveryManController@showRegister");

Route::post("/delivery/register", "DeliveryManController@register");

Route::get("/delivery/manager", function() {
    return view('spa');
});

Route::get("/delivery/login", function() {
    return view('spa');
});

Route::get("/delivery/dashboard", function() {
    return view('spa');
});





/////////////////////////////
///
///  Admin System
///
/////////////////////////////

// Route::get('/admin/orders', 'AdminController@showAllOrders');

// Route::get('/admin/assign_order/{order_id}/{delivery_man_id}', 'AdminController@assignOrder');

// Route::get('/admin/ordered_items/{order}', 'AdminController@orderedItems');

// Route::get("/restaurants/{restaurant}/dishes/add", 'RestaurantController@showAddDish');

// Route::post("/restaurants/{restaurant}/dishes/add", 'RestaurantController@addDish');

Route::get('/admin/{any}', function() {
    return view('spa');
})->where('any', '.*');
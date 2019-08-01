<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\OrderedItem;
use App\User;

class OrderController extends Controller
{
    public function registerOrder(Request $request)
    {
        $o = new Order;
        $o->user_id = $request->input('user_id');
        $o->mobile_number = $request->input('mobile_number');
        $o->delivery_code = $request->input('delivery_code');
        $o->restaurant_id = $request->input('restaurant_id');
        $o->status = "processing";
        $o->current_location = $request->input('current_location');
        $o->location_description = $request->input('location_description');
        $o->latlong = $request->input('latlong');
        $o->save();

        $order = $request->input('order');

        foreach($order as $item) {
            $oItem = new OrderedItem;
            $oItem->varient_id = $item['varient_id'];
            $oItem->price = $item['price'];
            $oItem->count = $item['count'];

            $o->orderedItems()->save($oItem);
        }
        
        return response()->json(['order_id' => $o->id, 'delivery_code'=> $o->delivery_code]);
    }


    public function getStatus(Request $request)
    {
        $order = Order::find($request->input('order_id'));

        if($order) return $order->status;
        else return "delivered";
    }
}

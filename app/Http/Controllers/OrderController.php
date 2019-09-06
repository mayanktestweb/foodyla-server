<?php

namespace App\Http\Controllers;

use App\DiscountCoupon;
use Illuminate\Http\Request;
use App\Order;
use App\OrderedItem;
use App\User;
use Illuminate\Support\Collection;

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

        $coupon = DiscountCoupon::find($request->input('applied_discount_coupon'));
        if($coupon) {
            $o->discount = $coupon->coupon_value;
            $coupon->delete();
        }

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

    public function getOrderDetails(Request $request)
    {
        $order = Order::find($request->input('id'));

        $customer = $order->user;
        $restaurant = $order->restaurant;
        $ordered_items = $order->orderedItems;
        $dishes = new Collection();

        foreach($ordered_items as $item) {
            $dish = [
                        'name' => $item->dishVarient->dish->name,
                        'label'=> $item->dishVarient->label,
                        'price'=> $item->price,
                        'cost' => $item->dishVarient->restaurantRate->rate,
                        'count'=> $item->count
                    ];

            $dishes->push($dish);        
        }

        return response()->json([
            'customer_name' => $customer->name,
            'mobile_number' => $customer->mobile_number,
            'address' => $order->location_description.", ".$order->current_location,
            'restaurant' => $restaurant->name,
            'dishes' => $dishes,
            'discount'  => $order->discount
        ]);
    }


    public function confirmDelivery(Request $request)
    {
        $order = Order::find($request->input('id'));

        if($order->delivery_code == $request->input('delivery_code')) {
            $order->status = 'delivered';
            $order->save();
            $status = 'success';
        } else {
            $status = 'fail';
        }

        return response()->json(['status'=>$status]);
    }
}

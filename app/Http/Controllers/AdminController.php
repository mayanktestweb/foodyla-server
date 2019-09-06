<?php

namespace App\Http\Controllers;

use App\AssignedOrder;
use App\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function showAllOrders()
    {
        $orders = Order::all()->reverse();

        return $orders;
    }

    public function assignOrder(Request $request)
    {
        $assignedOrder = new AssignedOrder();
        $assignedOrder->delivery_man_id = $request->delivery_man_id;
        $assignedOrder->order_id = $request->order_id;
        $assignedOrder->save();

        return "done assigning";
    }

    public function orderedItems(Order $order)
    {
        $orderedItems = $order->orderedItems;
        
        foreach ($orderedItems as $item) {
            # code...
            $dishV = $item->dishVarient;
            $dish = $dishV->dish;
            // $item->varient_id = $dish->name.', '.$dishV->label;
        }

        return $orderedItems;
    }
}

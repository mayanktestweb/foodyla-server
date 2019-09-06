<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssignedOrder extends Model
{
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function deliveryMan()
    {
        return $this->belongsTo(DeliveryMan::class);
    }
}

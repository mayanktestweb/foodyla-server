<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesDiscountRecord extends Model
{
    public function deliveryMan()
    {
        return $this->belongsTo(DeliveryMan::class);
    }
}

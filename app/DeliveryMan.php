<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeliveryMan extends Model
{
    public function orders()
    {
        return $this->hasMany(AssignedOrder::class);
    }

    public function discountRecords()
    {
        return $this->hasMany(SalesDiscountRecord::class);
    }
}

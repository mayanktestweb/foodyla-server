<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderedItem extends Model
{
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function dishVarient()
    {
        return $this->belongsTo(DishVarient::class);
    }
}

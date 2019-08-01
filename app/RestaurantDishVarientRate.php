<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RestaurantDishVarientRate extends Model
{
    public function dishVarient()
    {
        return $this->belongsTo(DishVarient::class);
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DishVarient extends Model
{
    protected $fillable = ['label', 'price'];

    public function dish()
    {
        return $this->belongsTo(Dish::class);
    }

    public function restaurantRate()
    {
        return $this->hasOne(RestaurantDishVarientRate::class);
    }
}

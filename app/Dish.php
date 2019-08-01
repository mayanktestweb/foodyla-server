<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    protected $fillable = ['name', 'menu_id', 'type', 'image', 'restaurant_id', 'isBestSeller'];

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function varients()
    {
        return $this->hasMany(DishVarient::class);
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    //
    protected $fillable = ['name', 'description', 'offer', 'rating', 'image', 'isOpen', 'close_note', 
    'region', 'latlong', 'mobile_number', 'other_data'];

    public function dishes()
    {
        return $this->hasMany(Dish::class);
    }
}

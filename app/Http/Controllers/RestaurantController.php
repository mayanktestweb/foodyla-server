<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Restaurant;
use App\Dish;
use App\DishVarient;
use App\RestaurantDishVarientRate;

class RestaurantController extends Controller
{
    public function showRestaurants()
    {
        $restaurants = Restaurant::all();
        return view('restaurants', ['restaurants' => $restaurants]);
    }

    public function getRestaurants(Request $request) 
    {
        // extract location and do the search based on region
        $location = $request->input("location");
        sleep(2);
        return response()->json(['restaurants'=> Restaurant::paginate(6)]);
    }

    public function showAdd() 
    {
        return view('add_restaurant');
    }

    public function add(Request $request)
    {
        try {
            //code...
            $restaurant = Restaurant::create($request->toArray());
        } catch (\Throwable $th) {
            //throw $th;
            dd($th);
            $restaurant = null;
        }

        if($restaurant) return "added"; else return 'failed';
    }



    public function loadRestaurantPage(Request $request, Restaurant $restaurant)
    {
        $dishes = $restaurant->dishes;
        
        foreach($dishes as $dish) {
            $dish->varients;
        }

        return $dishes;
    }

    public function showAddDish()
    {
        return view('add_dish');
    }

    public function addDish(Restaurant $restaurant, Request $request)
    {
        $dish = new Dish;
        $dish->name = $request->input('name');
        $dish->menu_id = $request->input('menu_id');
        $dish->type = $request->input('type');
        $dish->image = $request->input('image');
        $dish->isBestSeller = $request->input('isBestSeller');

        $restaurant->dishes()->save($dish);

        $varients = $request->input('varients');
        
        foreach ($varients as $varient) {
            # code...
            $v = new DishVarient;
            $v->label = $varient['label'];
            $v->price = $varient['price'];
            $dish->varients()->save($v);

            $rRate = new RestaurantDishVarientRate();
            $rRate->rate = $varient['restaurant_rate'];
            $v->restaurantRate()->save($rRate);
        }

        return "saved";
    }
}

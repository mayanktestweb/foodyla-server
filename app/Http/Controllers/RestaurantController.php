<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Restaurant;
use App\Dish;
use App\DishVarient;
use App\RestaurantDishVarientRate;

class RestaurantController extends Controller
{
    public function getAdminRestaurants(Request $request)
    {
        $restaurants = Restaurant::all();

        return response()->json(['restaurants' => $restaurants]);
    }

    public function getRestaurantData(Request $request)
    {
        $restaurant = Restaurant::find($request->input('id'));

        return response()->json(['restaurant' => $restaurant]);
    }

    public function getRestaurants(Request $request) 
    {
        // extract location and do the search based on region
        $location = $request->input("location");
        sleep(2);
        return response()->json(['restaurants'=> Restaurant::paginate(6)]);
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

    public function edit(Request $request)
    {
        $restaurant = Restaurant::find($request->input('id'));

        try {
            $restaurant->update($request->input());
        } catch (\Throwable $th) {
            dd($th);
            $restaurant = null;
        }

        if ($restaurant) {
            return "edited successfully";
        } else return "failed to edit";
    }

    public function getDishes(Request $request)
    {
        $restaurant = Restaurant::find($request->input('id'));
        $dishes = $restaurant->dishes;
        
        foreach($dishes as $dish) {
            foreach($dish->varients as $varient){
                $varient->restaurantRate;
            }
        }

        \Log::debug("i have got hit 2");
        return response()->json(['dishes' => $dishes]);
    }

    public function editDish(Request $request)
    {
        $dish = Dish::find($request->input('id'));

        try {
            $dish->update($request->input());
            $r = "success";
        } catch (\Throwable $th) {
            $r = "failed";
        }

        return $r;
    }

    public function editVarient(Request $request)
    {
        $varient = DishVarient::find($request->input('id'));

        try{
            $varient->update($request->input());
            $rRate = $varient->restaurantRate;
            $rRate->rate = $request->input('cost');
            $rRate->save();
            $r = "success";
        } catch ( \Throwable $th) {
            $r = "failed";
            dd($th);
        }

        return $r;
    }

    public function addDish(Request $request)
    {
        $restaurant = Restaurant::find($request->input('restaurant_id'));
        
        $dish = new Dish;
        $dish->name = $request->input('name');
        $dish->menu_id = $request->input('menu_id');
        $dish->type = $request->input('type');
        $dish->image = $request->input('image');
        $dish->isBestSeller = $request->input('isBestSeller');

        $restaurant->dishes()->save($dish);

        return "success";
    }

    public function addVarient(Request $request)
    {
        $dish = Dish::find($request->input('dish_id'));

        $v = new DishVarient;
        $v->label = $request->input('label');
        $v->price = $request->input('price');
        $dish->varients()->save($v);

        $rRate = new RestaurantDishVarientRate();
        $rRate->rate = $request->input('cost');
        $v->restaurantRate()->save($rRate);

        return "success";
    }

    public function loadRestaurantPage(Request $request, Restaurant $restaurant)
    {
        \Log::debug("i have got hit 1");
        $dishes = $restaurant->dishes;
        
        foreach($dishes as $dish) {
            $dish->varients;
        }

        \Log::debug("i have got hit 2");
        return $dishes;
    }

    public function showAddDish()
    {
        return view('add_dish');
    }

    /* public function addDish(Restaurant $restaurant, Request $request)
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
    } */
}

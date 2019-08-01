<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->text('offer')->nullable();
            $table->decimal('rating', 2, 1)->default(5.0);
            $table->string('image');
            $table->boolean('isOpen')->default(true);
            $table->string('close_note')->nullable();
            $table->string('region');
            $table->string('latlong');
            $table->string('mobile_number')->unique();
            $table->text("other_data")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurants');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->date('password_updated_at')->nullable();
            $table->rememberToken();
            $table->boolean('carrier_service_registered')->default(false);
            $table->boolean('shopify_grandfathered')->default(false);
            $table->string('shopify_namespace')->nullable(true)->default(null);
            $table->boolean('shopify_freemium')->default(false);
            $table->integer('plan_id')->unsigned()->nullable();
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shops');
    }
}

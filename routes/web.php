<?php

use Illuminate\Support\Facades\Route;
use ShopifyPlugin\Http\Controllers\HomeController;

Route::middleware(['verify.shopify', 'collivery.auth', 'collivery.carrier_service', 'collivery.settings'])->group(function () {
    Route::get('/', HomeController::class)
        ->name('home');
});

Route::fallback(HomeController::class)
    ->name('fallback');

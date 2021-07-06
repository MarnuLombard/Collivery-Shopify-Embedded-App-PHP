<?php

use Illuminate\Support\Facades\Route;
use ShopifyPlugin\Http\Controllers\HomeController;

Route::get('/', HomeController::class)
    ->middleware(['verify.shopify'])
    ->name('home');

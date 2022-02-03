<?php

use Illuminate\Support\Facades\Route;
use ShopifyPlugin\Http\Controllers\Checkout\ShippingQuoteController;
use ShopifyPlugin\Http\Controllers\HomeController;

Route::middleware(['verify.shopify', 'collivery.auth', 'collivery.carrier_service', 'collivery.settings'])
    ->group(function () {
            // Everything hits the same controller
        Route::get('/', HomeController::class)->name('home');
        Route::get('/settings', HomeController::class)->name('settings');
        Route::get('/orders/quote', HomeController::class)->name('orders.quote');
    });

Route::middleware(['auth.webhook'])
    ->group(function () {
        Route::post('shipping-quote', ShippingQuoteController::class)->name('shipping-quote');
    });


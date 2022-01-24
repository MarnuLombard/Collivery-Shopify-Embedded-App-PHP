<?php

use Illuminate\Support\Facades\Route;
use ShopifyPlugin\Http\Controllers\QuoteOrderController;
use ShopifyPlugin\Http\Controllers\SettingsController;
use ShopifyPlugin\Http\Controllers\WaybillController;
use ShopifyPlugin\Http\Controllers\WaybillImageController;

Route::middleware(['verify.shopify', 'collivery.auth', 'collivery.carrier_service', 'collivery.settings'])->group(function () {
    Route::resource('/waybills', WaybillController::class)
        ->only(['index', 'show', 'store']);
    Route::get('/waybills/image/{waybill}', WaybillImageController::class.'@show')
        ->name('waybills.image.show');
    Route::resource('/settings',  SettingsController::class)
        ->only(['index', 'store']);
    Route::get('orders/quote/{order}', QuoteOrderController::class)
        ->name('orders.quote');
});


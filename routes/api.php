<?php

use Illuminate\Support\Facades\Route;
use ShopifyPlugin\Http\Controllers\OrderController;
use ShopifyPlugin\Http\Controllers\QuoteOrderController;
use ShopifyPlugin\Http\Controllers\SettingsController;
use ShopifyPlugin\Http\Controllers\WaybillController;
use ShopifyPlugin\Http\Controllers\WaybillImageController;

Route::middleware(['verify.shopify', 'collivery.auth', 'collivery.carrier_service', 'collivery.settings'])
    ->name('api.')
    ->group(function () {
        Route::get('/waybills/{waybill}/image', WaybillImageController::class.'@show')
            ->name('waybills.image.show');
        Route::resource('/waybills', WaybillController::class)
            ->only(['index', 'show', 'store']);
        Route::resource('/settings', SettingsController::class)
            ->only(['index', 'store']);
        Route::get('orders/{order}/quote', QuoteOrderController::class)
            ->name('orders.quote');
        Route::get('orders/{order}', OrderController::class.'@show')
            ->name('orders.show');
    });


<?php

use Illuminate\Foundation\Application;
use ShopifyPlugin\Models\Shop;

/**
 * @var Application $app
 */

if (!function_exists('user')) {
    /**
     * Minor simplification, but reaps rewards in the long run
     */
    function user(): ?Shop
    {
        return Auth::user();
    }
}

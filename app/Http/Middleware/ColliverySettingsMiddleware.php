<?php

namespace ShopifyPlugin\Http\Middleware;

use Illuminate\Http\Request;
use ShopifyPlugin\Models\ColliverySettings;
use ShopifyPlugin\Models\Shop;

class ColliverySettingsMiddleware
{
    /**
     * @param Request|mixed $request
     */
    public function handle($request, \Closure $next)
    {
        /** @var Shop $shop */
        $shop = $request->user();
        if (!$shop) {
            return $next($request);
        }

        if (!$shop->colliverySettings) {
            ColliverySettings::createDefault($shop);
        }

        return $next($request);
    }
}

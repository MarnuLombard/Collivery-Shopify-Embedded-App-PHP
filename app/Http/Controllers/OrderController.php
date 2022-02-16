<?php

namespace ShopifyPlugin\Http\Controllers;

use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use ShopifyPlugin\Exceptions\ShopifyConnectionException;
use ShopifyPlugin\Models\Shop;
use ShopifyPlugin\ShopifyApi\ApiRequests\OrderApiRequest;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

class OrderController
{
    /**
     * @throws \Throwable
     */
    public function show(int $order): JsonResponse|RedirectResponse
    {
        /** @var Shop $shop */
        $shop = request()->user();
        try {
            $order = (new OrderApiRequest($shop))->showOrder($order);

            return response()->json(['data' => $order]);
        } catch (UnknownProperties|ShopifyConnectionException $e) {
            app(ExceptionHandler::class)->report($e);

            return redirect()->route('home')->withErrors("Error connecting to Shopify: ".$e->getMessage());
        }
    }
}

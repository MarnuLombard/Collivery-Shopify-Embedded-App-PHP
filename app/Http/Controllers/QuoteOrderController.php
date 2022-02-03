<?php

namespace ShopifyPlugin\Http\Controllers;

use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use ShopifyPlugin\ColliveryApi\ApiRequests\QuoteApiRequest;
use ShopifyPlugin\ColliveryApi\InputData\QuoteInput;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;
use ShopifyPlugin\Exceptions\ShopifyConnectionException;
use ShopifyPlugin\Models\Shop;
use ShopifyPlugin\ShopifyApi\ApiRequests\OrderApiRequest;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

class QuoteOrderController
{
    /**
     * @throws \Throwable
     */
    public function __invoke(int $order): JsonResponse|RedirectResponse
    {
        // Just have to rely on `verify.shopify` middleware having run correctly here
        // There's no DRY way to re-assert that we do have a valid shop
        /** @var Shop $shop */
        $shop = request()->user();
        try {
            $order = (new OrderApiRequest($shop))->showOrder($order);
            $quoteInput = (new QuoteInput($shop->colliverySettings))->fromOrder($order);

            return response()->json((new QuoteApiRequest($shop->colliverySettings))->show($quoteInput));
        } catch (UnknownProperties|ShopifyConnectionException $e) {
            app(ExceptionHandler::class)->report($e);

            return redirect()->route('home')->withErrors("Error connecting to Shopify: ".$e->getMessage());
        } catch (HttpClientException|PropertyDoesNotExist $e) {
            app(ExceptionHandler::class)->report($e);

            return redirect()->route('home')->withErrors("Error connecting to Collivery: ".$e->getMessage());
        }
    }
}

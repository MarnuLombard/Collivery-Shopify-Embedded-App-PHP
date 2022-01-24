<?php

namespace ShopifyPlugin\Http\Controllers\Checkout;

use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use ShopifyPlugin\ColliveryApi\ApiRequests\QuoteApiRequest;
use ShopifyPlugin\ColliveryApi\InputData\QuoteInput;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;
use ShopifyPlugin\Http\Controllers\Controller;
use ShopifyPlugin\Models\Shop;
use ShopifyPlugin\ShopifyApi\Models\QuoteRequest;
use ShopifyPlugin\ShopifyApi\Responses\QuoteResponse;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

class ShippingQuoteController extends Controller
{
    public function __construct()
    {
        // Verify our 'x-shopify-shop-domain' and 'x-shopify-hmac-sha256' headers
        $this->middleware(['auth.webhook']);
    }

    /**
     * @throws UnknownProperties
     * @throws PropertyDoesNotExist
     * @throws ValidationException
     * @throws HttpClientException
     */
    public function __invoke(): JsonResponse
    {
        $shopUrl = request()->header('x-shopify-shop-domain');
        $shop = Shop::where('name', $shopUrl)->firstOrFail();
        $request = new QuoteRequest(request()->all());
        $quoteInput = (new QuoteInput($shop->colliverySettings))->fromQuoteRequest($request);

        $quoteData = (new QuoteApiRequest($shop->colliverySettings))->show($quoteInput);

        return response()->json(new QuoteResponse($quoteData));
    }
}

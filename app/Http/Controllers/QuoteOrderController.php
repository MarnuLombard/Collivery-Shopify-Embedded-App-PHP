<?php

namespace ShopifyPlugin\Http\Controllers;

use Osiset\BasicShopifyAPI\ResponseAccess;
use ShopifyPlugin\ColliveryApi\ApiRequests\QuoteApiRequest;
use ShopifyPlugin\ColliveryApi\InputData\QuoteInput;
use ShopifyPlugin\Models\Shop;
use ShopifyPlugin\ShopifyApi\Models\Order;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

class QuoteOrderController
{
    public function __invoke(int $order)
    {
        // Just have to rely on `verify.shopify` middleware having run correctly here
        // There's no DRY way to re-assert that we do have a valid shop
        /** @var Shop $shop */
        $shop = request()->user();
        /** @var ResponseAccess $body */
        ['status' => $status, 'body' => $body] = $shop->api()->rest(
            'GET',
            '/admin/api/2021-10/orders/'.$order.'.json'
        );

        if ($status < 200 || $status >= 300) {
            return redirect()->route('home')->withErrors([
                'Could not retrieve order for #'.$order,
            ]);
        }

        try {
            $order = new Order($body->toArray()['order']);
        } catch (UnknownProperties $e) {
            return redirect()->route('home')->withErrors($e->getMessage());
        }

        $quoteInput = (new QuoteInput($shop->colliverySettings))->fromOrder($order);

        return response()->json((new QuoteApiRequest($shop->colliverySettings))->show($quoteInput));

    }
}

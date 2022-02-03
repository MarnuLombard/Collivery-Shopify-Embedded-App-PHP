<?php

namespace ShopifyPlugin\ShopifyApi\ApiRequests;

use Osiset\BasicShopifyAPI\ResponseAccess;
use ShopifyPlugin\Exceptions\ShopifyConnectionException;
use ShopifyPlugin\ShopifyApi\Models\Order;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

class OrderApiRequest extends ShopifyApiRequest
{
    /**
     * @throws UnknownProperties|ShopifyConnectionException
     */
    public function showOrder(int $orderId): ?Order
    {
        /** @var ResponseAccess $body */
        ['status' => $status, 'body' => $body] = $this->api->rest(
            'GET',
            '/admin/api/2021-10/orders/'.$orderId.'.json'
        );

        if ($status < 200 || $status >= 300) {
            throw new ShopifyConnectionException('Could not retrieve order for #'.$orderId, $status);
        }

        return new Order($body->toArray()['order']);
    }
}

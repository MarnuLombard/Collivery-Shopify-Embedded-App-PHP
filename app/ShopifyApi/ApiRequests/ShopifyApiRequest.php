<?php

namespace ShopifyPlugin\ShopifyApi\ApiRequests;

use Osiset\BasicShopifyAPI\BasicShopifyAPI;
use Osiset\ShopifyApp\Contracts\ShopModel;

abstract class ShopifyApiRequest
{
    protected BasicShopifyAPI $api;

    public function __construct(ShopModel $shop)
    {
        // Set up the shop-specific api accessor
        $this->api = $shop->api();
    }
}

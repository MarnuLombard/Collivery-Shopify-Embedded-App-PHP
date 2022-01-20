<?php

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class Rate extends DataTransferObject
{
    public QuoteAddress $origin;
    public QuoteAddress $destination;
    /** @var ShippingItem[] */
    public array $items;
    public string $currency;
    public string $locale;
}

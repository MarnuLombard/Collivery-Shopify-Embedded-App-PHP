<?php

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class ShippingItem extends DataTransferObject
{
    public string $name;
    public string $sku;
    public int $quantity;
    public int $grams;
    public int $price;
    public string $vendor;
    public bool $requires_shipping;
    public bool $taxable;
    public string $fulfillment_service;
    public object $properties;
    public int $product_id;
    public int $variant_id;
}

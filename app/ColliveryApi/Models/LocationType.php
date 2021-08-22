<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;

class LocationType
{
    use IsResponseComposable;

    public int $id;
    public string $name;
    public bool $surcharge;
    public int $surcharge_amount;
}

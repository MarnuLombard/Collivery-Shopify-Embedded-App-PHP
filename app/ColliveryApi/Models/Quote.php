<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;

class Quote
{
    use IsResponseComposable;

    public int $service_type;
    public float $total;
    public string $delivery_type;
}

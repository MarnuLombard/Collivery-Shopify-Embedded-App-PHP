<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Quote
{
    use IsResponseComposable;

    public int $service_type;
    public float $total;
    public string $delivery_type;
}

<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class StatusTracking
{
    use IsResponseComposable;

    public int $status_id;
    public string $status_name;
    public int $waybill_id;
    public string $created_at;
}

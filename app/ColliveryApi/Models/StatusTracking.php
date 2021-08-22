<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;

class StatusTracking
{
    use IsResponseComposable;

    public int $status_id;
    public string $status_name;
    public int $waybill_id;
    public string $created_at;
}

<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class GeocodeData
{
    use IsResponseComposable;

    public int $accuracy;           //":8
    public string $accuracy_type;   //":"Address"
    public string $last_geocoded_at;//":"1900-01-01"
    public float $latitude;         //":-33.954999999999998
    public float $longitude;        //":25.5868
}

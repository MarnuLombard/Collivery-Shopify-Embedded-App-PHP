<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Parcel
{
    use IsResponseComposable;

    public int $id;
    public int $waybill_id;
    public int $parcel_number;
    public ?string $custom_id;
    public int $quantity;
    public int $length;
    public int $width;
    public int $height;
    public int $weight;
    public int $volumetric_weight;
    public string $created_at;
    public string $add_method;
}

<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript]
class Waybill
{
    use IsResponseComposable;

    public int $id;
    public ?string $custom_id;
    public int $service_type_id;
    public string $service_type_name;
    public int $collection_time;
    public ?string $customer_reference;
    public int $delivery_time;
    public int $parcel_count;
    public string $special_instructions;
    public int $collection_address_id;
    public int $collection_contact_id;
    public int $delivery_address_id;
    public int $delivery_contact_id;
    public int $status_id;
    public string $status_name;
    public string $parcel_description;
    public int $weight;
    public int $volumetric_weight;
    public int $total_price;
    public bool $risk_cover;
    public Address $delivery_address;
    public Address $collection_address;
    /** @var Parcel[] */
    public array $parcels;
}

<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;

class Address
{
    use IsResponseComposable;

    public int $id;
    public ?string $custom_id;
    public int $town_id;
    public int $suburb_id;
    public string $text;
    public string $short_text;
    public LocationType $location_type;
    public GeocodeData $geocode_data;
}

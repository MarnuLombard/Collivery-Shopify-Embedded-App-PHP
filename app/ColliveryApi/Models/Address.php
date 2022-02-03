<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;

class Address
{
    use IsResponseComposable;

    public int $id;
    public ?string $custom_id;
    public int $town_id;
    public int $suburb_id;
    public ?string $company_name = null;
    public ?string $building_complex_name = null;
    public ?string $street_number = null;
    public string $street_name;
    public ?string $postal_code = null;
    public string $country_name;
    public string $text;
    public string $short_text;
    public LocationType $location_type;
    public GeocodeData $geocode_data;
}

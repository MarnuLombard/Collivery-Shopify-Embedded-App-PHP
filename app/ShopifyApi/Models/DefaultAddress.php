<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

class DefaultAddress extends BaseAddress
{
    public ?string $company = null;
    public ?string $last_name = null;
    public ?bool $default = null;
    public ?int $id = null;
    public ?int $customer_id;
    public string $country_code;
    public ?string $country_name;
    public string $province;
    public string $province_code;
    public string $zip;
}

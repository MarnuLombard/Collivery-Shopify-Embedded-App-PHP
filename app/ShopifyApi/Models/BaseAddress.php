<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

abstract class BaseAddress extends DataTransferObject
{
    public string $address1;
    public ?string $address2;
    public ?string $phone;
    public ?string $first_name;
    public ?string $name;
    public string $city;
    public string $country;
}

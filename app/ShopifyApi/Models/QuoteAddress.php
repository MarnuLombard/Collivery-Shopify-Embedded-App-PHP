<?php

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class QuoteAddress extends DataTransferObject
{
    public string $country;
    public int $postal_code;
    public Province $province;
    public string $city;
    public string $name;
    public string $address1;
    public ?string $address2;
    public ?string $phone;
    public ?string $email;
    public ?string $address3 = null;
    public ?string $fax = null;
    public ?string $address_type = null;
    public ?string $company_name = null;

}

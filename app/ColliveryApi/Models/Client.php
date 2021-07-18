<?php

namespace ShopifyPlugin\ColliveryApi\Models;

class Client
{
    use IsResponseComposable;

    public int $id;
    public string $name;
    public ?string $landline_number;
    public ?string $mobile_number;
    public string $account_code;
    /** @var string "prepaid" | "account" */
    public string $account_type;
    public Address $primary_address;
}

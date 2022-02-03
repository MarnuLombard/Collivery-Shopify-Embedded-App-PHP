<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
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

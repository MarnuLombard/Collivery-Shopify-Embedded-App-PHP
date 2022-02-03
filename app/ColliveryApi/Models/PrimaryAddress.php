<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

// For the sake of auto-composition of the `auth_data.client.primary_address` dat
#[TypeScript]
class PrimaryAddress extends Address
{

}

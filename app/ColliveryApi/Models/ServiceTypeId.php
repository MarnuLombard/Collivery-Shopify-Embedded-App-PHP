<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\Services\Typescript\Transformers\ConstantsToEnumTransformer;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptTransformer;

#[TypeScript]
#[TypeScriptTransformer(ConstantsToEnumTransformer::class)]
class ServiceTypeId
{
    public const SAME_DAY = 1;
    public const NEXT_DAY = 2;
    public const FREIGHT = 3;
    public const ECONOMY = 5;
}

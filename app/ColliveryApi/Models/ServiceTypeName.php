<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\Services\TypescriptTransformers\ConstantsToEnumTransformer;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptTransformer;

#[TypeScript]
#[TypeScriptTransformer(ConstantsToEnumTransformer::class)]
class ServiceTypeName
{
    public const SAME_DAY = 'Same Day';
    public const NEXT_DAY = 'Next Day';
    public const FREIGHT = 'Road Freight Express';
    public const ECONOMY = 'Road Freight';
}

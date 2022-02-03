<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\Services\TypescriptTransformers\ConstantsToEnumTransformer;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptTransformer;

#[TypeScript]
#[TypeScriptTransformer(ConstantsToEnumTransformer::class)]
class ServiceTypeCode
{
    public const SAME_DAY = 'SDX';
    public const NEXT_DAY = 'ONX';
    public const FREIGHT = 'FRT';
    public const ECONOMY = 'ECO';
}

<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript]
class ServiceType
{
    #[TypeScriptType(ServiceTypeId::class)]
    public int $id;
    #[TypeScriptType(ServiceTypeCode::class)]
    public string $code;
    #[TypeScriptType(ServiceTypeName::class)]
    public string $text;
    public string $description;
    public int $delivery_days;
}

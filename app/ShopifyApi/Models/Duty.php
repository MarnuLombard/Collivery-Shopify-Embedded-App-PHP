<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Duty
{
    public int $id;
    #[CastWith(ArrayCaster::class, TaxLine::class)]
    public array $tax_lines = [];
}

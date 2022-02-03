<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Rate extends DataTransferObject
{
    public QuoteAddress $origin;
    public QuoteAddress $destination;
    /** @var \ShopifyPlugin\ShopifyApi\Models\ShippingLine[] */
    #[CastWith(ArrayCaster::class, itemType: LineItem::class)]
    public array $items;
    public string $currency;
    public string $locale;
}

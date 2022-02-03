<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\DataTransferObject\DataTransferObject;

class Rate extends DataTransferObject
{
    public QuoteAddress $origin;
    public QuoteAddress $destination;
    /** @var ShippingLine[] */
    #[CastWith(ArrayCaster::class, LineItem::class)]
    public array $items;
    public string $currency;
    public string $locale;
}

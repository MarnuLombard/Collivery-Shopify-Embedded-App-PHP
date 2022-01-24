<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\DataTransferObject\DataTransferObject;

class ShippingLine extends DataTransferObject
{
    public ?int $id;
    public ?string $carrier_identifier = null;
    public string $code;
    public $delivery_category;
    public string $discounted_price;
    public AmountSet $discounted_price_set;
    public ?string $phone = null;
    public string $price;
    public AmountSet $price_set;
    public ?string $requested_fulfillment_service_id = null;
    public string $source;
    public string $title;
    /** @var TaxLine[] */
    #[CastWith(ArrayCaster::class, TaxLine::class)]
    public array $tax_lines = [];
    /** @var DiscountAllocation[] */
    #[CastWith(ArrayCaster::class, DiscountAllocation::class)]
    public array $discount_allocations = [];
}

<?php  /** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\DataTransferObject\DataTransferObject;

class LineItem extends DataTransferObject
{
    public ?int $id;
    public ?string $admin_graphql_api_id;
    public ?int $fulfillable_quantity;
    public string $fulfillment_service;
    public ?string $fulfillment_status = null;
    public ?bool $gift_card;
    public int $grams;
    public string $name;
    public ?string $price;
    public ?AmountSet $price_set;
    public ?bool $product_exists;
    public int $product_id;
    /** @var Attribute[] $properties */
    #[CastWith(ArrayCaster::class, Attribute::class)]
    public array $properties = [];
    public int $quantity;
    public bool $requires_shipping;
    public ?string $sku;
    public bool $taxable;
    public ?string $title;
    public ?string $total_discount;
    public ?AmountSet $total_discount_set;
    public int $variant_id;
    public ?string $variant_inventory_management;
    public ?string $variant_title;
    public ?string $vendor = null;

    /** @var TaxLine[] $tax_lines */
    #[CastWith(ArrayCaster::class, TaxLine::class)]
    public ?array $tax_lines;

    /** @var Duty[] $duties */
    #[CastWith(ArrayCaster::class, Duty::class)]
    public ?array $duties = [];

    /** @var DiscountAllocation[] $discount_allocations */
    #[CastWith(ArrayCaster::class, DiscountAllocation::class)]
    public ?array $discount_allocations;
}

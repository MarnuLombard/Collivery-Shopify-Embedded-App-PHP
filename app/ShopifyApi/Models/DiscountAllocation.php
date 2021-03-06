<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class DiscountAllocation extends DataTransferObject
{
    public string $amount;
    public AmountSet $amount_set;
    public int $discount_application_index;
}

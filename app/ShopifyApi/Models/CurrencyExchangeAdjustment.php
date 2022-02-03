<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class CurrencyExchangeAdjustment extends DataTransferObject
{
    public int $id;
    public string $currency;
    public string $adjustment;
    public string $final_amount;
    public string $original_amount;
}

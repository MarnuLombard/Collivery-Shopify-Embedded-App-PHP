<?php /** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class CurrencyExchangeAdjustment extends DataTransferObject
{
    public int $id;
    public string $currency;
    public string $adjustment;
    public string $final_amount;
    public string $original_amount;
}

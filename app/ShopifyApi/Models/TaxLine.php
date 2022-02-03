<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class TaxLine extends DataTransferObject
{
    public ?bool $channel_liable = null;
    public string $price;
    public AmountSet $price_set;
    public float $rate;
    public string $title;
}

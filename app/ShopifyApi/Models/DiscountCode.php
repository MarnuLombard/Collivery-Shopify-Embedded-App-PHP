<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class DiscountCode extends DataTransferObject
{
    public string $code;
    public string $amount;
    public string $type;
}

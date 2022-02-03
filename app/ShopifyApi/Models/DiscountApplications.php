<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class DiscountApplications extends DataTransferObject
{
    public string $target_type;
    public string $type;
    public string $value;
    public string $value_type;
    public string $allocation_method;
    public string $target_selection;
    public string $code;
}

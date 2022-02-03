<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class Receipt extends DataTransferObject
{
    public bool $testcase = false;
    public string $authorization;
}

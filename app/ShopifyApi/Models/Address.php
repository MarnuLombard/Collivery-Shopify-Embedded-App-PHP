<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Address extends DefaultAddress
{
    public float $latitude;
    public float $longitude;
}

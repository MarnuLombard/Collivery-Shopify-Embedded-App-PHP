<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class Attribute extends DataTransferObject
{
	public string $name;
	public int|string $value;
}

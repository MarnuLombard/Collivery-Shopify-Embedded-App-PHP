<?php  /** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class Money extends DataTransferObject
{
	public string $amount;
	public string $currency_code;
}

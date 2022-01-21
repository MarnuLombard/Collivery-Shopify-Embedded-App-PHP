<?php  /** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class AmountSet extends DataTransferObject
{
	public Money $shop_money;
	public Money $presentment_money;
}

<?php /** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class Transaction extends DataTransferObject
{
	public int $id;
	public int $order_id;
	public string $kind;
	public string $gateway;
	public string $status;
	public ?string $message = null;
	public string $created_at;
	public bool $test;
	public string $authorization;
	public LocationId $location_id;
	public ?int $user_id = null;
	public ?int $parent_id = null;
	public string $processed_at;
	public ?int $device_id = null;
	public ?string $error_code = null;
	public string $source_name;
	public PaymentDetails $payment_details;
	public Receipt $receipt;
	public ?CurrencyExchangeAdjustment $currency_exchange_adjustment = null;
	public string $amount;
	public string $currency;
	public ?string $authorization_expires_at = null;
	public ExtendedAuthorizationAttributes $extended_authorization_attributes;
	public string $admin_graphql_api_id;
}

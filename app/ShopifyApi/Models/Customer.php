<?php /** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class Customer extends DataTransferObject
{
	public int $id;
	public string $email;
	public bool $accepts_marketing;
	public string $created_at;
	public string $updated_at;
	public string $first_name;
	public string $last_name;
	public int $orders_count;
	public string $state;
	public string $total_spent;
	public ?int $last_order_id = null;
	public ?string $last_order_name = null;
	public ?string $note = null;
	public bool $verified_email;
	public ?string $multipass_identifier = null;
	public bool $tax_exempt;
	public ?string $phone = null;
	public string $tags;
	public string $currency;
	public string $accepts_marketing_updated_at;
	public $marketing_opt_in_level;
	public ?array $tax_exemptions = [];
	public $sms_marketing_consent;
	public string $admin_graphql_api_id;
	public DefaultAddress $default_address;
}

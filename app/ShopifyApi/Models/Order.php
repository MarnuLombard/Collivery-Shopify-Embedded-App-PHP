<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Order extends DataTransferObject
{
    public int $id;
    public string $admin_graphql_api_id;
    public ?int $app_id = null;
    public string $browser_ip;
    public bool $buyer_accepts_marketing;
    public ?string $cancel_reason = null;
    public ?string $cancelled_at = null;
    public string $cart_token;
    public int $checkout_id;
    public string $checkout_token;
    public ClientDetails $client_details;
    public ?string $closed_at = null;
    public bool $confirmed;
    public string $contact_email;
    public string $created_at;
    public string $currency;
    public string $current_subtotal_price;
    public AmountSet $current_subtotal_price_set;
    public string $current_total_discounts;
    public AmountSet $current_total_discounts_set;
    public ?AmountSet $current_total_duties_set;
    public string $current_total_price;
    public AmountSet $current_total_price_set;
    public string $current_total_tax;
    public AmountSet $current_total_tax_set;
    public ?string $customer_locale = null;
    public ?string $device_id = null;

    /** @var DiscountCode[] $discount_codes */
    #[CastWith(ArrayCaster::class, DiscountCode::class)]
    public array $discount_codes;
    public string $email;
    public bool $estimated_taxes;
    public string $financial_status;
    public ?string $fulfillment_status = null;
    public string $gateway;
    public string $landing_site;
    public ?string $landing_site_ref = null;
    public ?int $location_id = null;
    public string $name;
    public ?string $note = null;

    /** @var Attribute[] $note_attributes */
    #[CastWith(ArrayCaster::class, Attribute::class)]
    public array $note_attributes;
    public int $number;
    public int $order_number;
    public string $order_status_url;
    public ?AmountSet $original_total_duties_set = null;

    /** @var string[] $payment_gateway_names */
    public array $payment_gateway_names;
    public ?string $phone = null;
    public string $presentment_currency;
    public string $processed_at;
    public string $processing_method;
    public ?string $reference = null;
    public string $referring_site;
    public ?string $source_identifier;
    public string $source_name;
    public ?string $source_url = null;
    public string $subtotal_price;
    public AmountSet $subtotal_price_set;
    public string $tags;

    /** @var TaxLine[] $tax_lines */
    #[CastWith(ArrayCaster::class, TaxLine::class)]
    public array $tax_lines;
    public bool $taxes_included;
    public bool $test;
    public string $token;
    public string $total_discounts;
    public AmountSet $total_discounts_set;
    public string $total_line_items_price;
    public AmountSet $total_line_items_price_set;
    public string $total_outstanding;
    public string $total_price;
    public AmountSet $total_price_set;
    public string $total_price_usd;
    public AmountSet $total_shipping_price_set;
    public string $total_tax;
    public AmountSet $total_tax_set;
    public string $total_tip_received;
    public int $total_weight;
    public string $updated_at;
    public ?int $user_id = null;
    public Address $billing_address;
    public Customer $customer;

    /** @var DiscountApplications[] $discount_applications */
    #[CastWith(ArrayCaster::class, DiscountApplications::class)]
    public array $discount_applications;

    /** @var Fulfillment[] $fulfillments */
    #[CastWith(ArrayCaster::class, Fulfillment::class)]
    public array $fulfillments;

    /** @var LineItem[] $line_items */
    #[CastWith(ArrayCaster::class, LineItem::class)]
    public array $line_items;
    public PaymentDetails $payment_details;

    /** @var Refund[] $refunds */
    #[CastWith(ArrayCaster::class, Refund::class)]
    public array $refunds;
    public Address $shipping_address;

    /** @var ShippingLine[] $shipping_lines */
    #[CastWith(ArrayCaster::class, ShippingLine::class)]
    public array $shipping_lines;
}

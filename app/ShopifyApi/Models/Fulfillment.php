<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Fulfillment extends DataTransferObject
{
    public int $id;
    public string $admin_graphql_api_id;
    public string $created_at;
    public int $location_id;
    public string $name;
    public int $order_id;
    public Address $origin_address;
    public Receipt $receipt;
    public string $service;
    public $shipment_status;
    public string $status;
    public string $tracking_company;
    public string $tracking_number;

    /** @var string[] $tracking_numbers */
    public array $tracking_numbers;
    public string $tracking_url;

    /** @var string[] $tracking_urls */
    public array $tracking_urls;
    public string $updated_at;

    /** @var LineItem[] $line_items */
    #[CastWith(ArrayCaster::class, LineItem::class)]
    public array $line_items;
}

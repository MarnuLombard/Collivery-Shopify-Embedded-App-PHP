<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Casters\ArrayCaster;
use Spatie\DataTransferObject\DataTransferObject;

class Refund extends DataTransferObject
{
    public int $id;
    public string $admin_graphql_api_id;
    public string $created_at;
    public string $note;
    public int $order_id;
    public string $processed_at;
    public bool $restock;
    public AmountSet $total_additional_fees_set;
    public AmountSet $total_duties_set;
    public int $user_id;
    public $order_adjustments;

    /** @var Transaction[] $transaction */
    #[CastWith(ArrayCaster::class, Transaction::class)]
    public array $transactions;

    /** @var RefundLineItems[] $refund_line_items */
    #[CastWith(ArrayCaster::class, RefundLineItems::class)]
    public array $refund_line_items;
    public $duties;
    public $additional_fees;
}

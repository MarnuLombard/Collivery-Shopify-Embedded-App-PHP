<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class RefundLineItems extends DataTransferObject
{
    public int $id;
    public int $line_item_id;
    public int $location_id;
    public int $quantity;
    public string $restock_type;
    public float $subtotal;
    public AmountSet $subtotal_set;
    public float $total_tax;
    public AmountSet $total_tax_set;
    public LineItem $line_item;
}

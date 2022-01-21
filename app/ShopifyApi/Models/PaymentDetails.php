<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class PaymentDetails extends DataTransferObject
{
    public string $credit_card_number;
    public string $credit_card_company;
    public ?string $credit_card_bin = null;
    public ?string $avs_result_code = null;
    public ?string $cvv_result_code = null;
    public ?string $credit_card_name = null;
    public ?string $credit_card_wallet = null;
    public ?string $credit_card_expiration_month = null;
    public ?string $credit_card_expiration_year = null;
}

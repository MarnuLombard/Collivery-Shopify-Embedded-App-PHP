<?php  /** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

class QuoteAddress extends BaseAddress
{
    public ?string $address3 = null;
    public ?string $address_type = null;
    public ?string $company_name = null;
    public ?string $email;
    public ?string $fax = null;
    public Province $province;
    public int $postal_code;
}

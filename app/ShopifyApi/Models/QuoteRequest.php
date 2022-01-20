<?php

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;

class QuoteRequest extends DataTransferObject
{
    public Rate $rate;
}

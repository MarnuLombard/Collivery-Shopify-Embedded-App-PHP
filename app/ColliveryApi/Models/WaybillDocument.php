<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;

class WaybillDocument
{
    use IsResponseComposable;

    public string $id;
    /** @var string waybill|quote */
    public string $type;
    public string $file_name;
    public string $pages;
    public string $mime;
    public string $size;
    public string $created_at;
    /** @var string The base64 encoded image */
    public string $image;
}

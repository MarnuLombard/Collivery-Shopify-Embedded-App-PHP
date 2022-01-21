<?php

namespace ShopifyPlugin\ColliveryApi\Models;

class WaybillService
{
    public const SAME_DAY = 1;
    public const NEXT_DAY = 2;
    public const FREIGHT = 3;
    public const ECONOMY = 5;

    public static array $briefNames = [
        self::SAME_DAY => 'SDX',
        self::NEXT_DAY => 'ONX',
        self::ECONOMY => 'ECO',
        self::FREIGHT => 'FRT',
    ];
    public static array $texts = [
        self::SAME_DAY => 'Same Day',
        self::NEXT_DAY => 'Next Day',
        self::ECONOMY => 'Road Freight Express',
        self::FREIGHT => 'Road Freight',
    ];
}

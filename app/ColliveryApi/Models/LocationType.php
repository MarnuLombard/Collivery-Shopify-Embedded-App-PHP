<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;

class LocationType
{
    use IsResponseComposable;

    const BUSINESS_PREMISES = 1;
    const GOVERNMENT_HOSPITAL = 2;
    const FARM_PLOT = 3;
    const GOVERNMENT_BUILDING = 4;
    const MINE = 5;
    const POWER_STATION = 6;
    const TRUST_AREA = 7;
    const HIGHRISK = 8;
    const OFFICE_PARK = 9;
    const GAME_RESERVE_RESORT = 10;
    const EMBASSY_CONSULATE = 11;
    const SHOPPING_CENTRE = 12;
    const CHAIN_STORE = 13;
    const UNIVERSITY = 14;
    const PRIVATE_HOUSE = 15;
    const GATED_SUBURB = 16;
    const TOLL_PLAZA = 17;

    public int $id;
    public string $name;
    public bool $surcharge;
    public int $surcharge_amount;
}

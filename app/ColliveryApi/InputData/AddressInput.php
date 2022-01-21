<?php

namespace ShopifyPlugin\ColliveryApi\InputData;

use Illuminate\Contracts\Support\Arrayable;
use ShopifyPlugin\ColliveryApi\Models\Address;
use ShopifyPlugin\ColliveryApi\Models\LocationType;
use ShopifyPlugin\ShopifyApi\Models\BaseAddress;
use ShopifyPlugin\ShopifyApi\Models\QuoteAddress;

class AddressInput implements Arrayable
{
    private ?int $town_id = null;
    private ?string $town_name = null;
    private ?int $suburb_id = null;
    private ?string $suburb_name = null;
    private ?string $company_name = null;
    private ?string $building = null;
    private string $street;
    private int $location_type;
    private ?string $province = null;

    public static function fromShopifyQuoteAddress(QuoteAddress $quoteAddress): self
    {
        $address = new self();
        $address->province = $quoteAddress->province->name;
        $address->town_name = $quoteAddress->city;
        $address->suburb_name = $quoteAddress->address3
            ?: $quoteAddress->address2
            ?: $quoteAddress->city;
        $address->company_name = $quoteAddress->company_name;
        $address->building = $quoteAddress->address2;
        $address->street = $quoteAddress->address1;
        $address->location_type = LocationType::BUSINESS_PREMISES;

        return $address;
    }

    public static function fromShopifyBaseAddress(BaseAddress $baseAddress): self
    {
        $address = new self();
        $address->town_name = $baseAddress->city;
        $address->suburb_name = $baseAddress->address2 ?: $baseAddress->city;
        $address->building = $baseAddress->address2;
        $address->street = $baseAddress->address1;
        $address->location_type = LocationType::BUSINESS_PREMISES;

        return $address;
    }

    public static function fromColliveryDefaultAddress(Address $defaultAddress): self
    {
        $address = new self();
        $address->town_id = $defaultAddress->town_id;
        $address->suburb_id = $defaultAddress->suburb_id;
        $address->location_type = $defaultAddress->location_type->id;
        $address->company_name = $defaultAddress->company_name;
        $address->building = $defaultAddress->building_complex_name;
        $address->street = trim("$defaultAddress->street_number $defaultAddress->street_name" ?: $defaultAddress->short_text);

        return $address;
    }

    public function toArray(): array
    {
        return array_filter([
            'town_id' => $this->town_id,
            'town_name' => $this->town_name,
            'suburb_id' => $this->suburb_id,
            'suburb_name' => $this->suburb_name,
            'company_name' => $this->company_name,
            'building' => $this->building,
            'street' => $this->street,
            'location_type' => $this->location_type,
            'province' => $this->province,
        ]);
    }
}

<?php

namespace ShopifyPlugin\ColliveryApi\InputData;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Validation\ValidationException;
use JetBrains\PhpStorm\ArrayShape;
use ShopifyPlugin\ColliveryApi\AuthManager;
use ShopifyPlugin\ColliveryApi\Models\WaybillService;
use ShopifyPlugin\Models\ColliverySettings;
use ShopifyPlugin\ShopifyApi\Models\LineItem;
use ShopifyPlugin\ShopifyApi\Models\Order;
use ShopifyPlugin\ShopifyApi\Models\QuoteRequest;

class QuoteInput implements Arrayable
{
    /** @var array<int> */
    public array $service_ids;
    /** @var array<array> */
    public array $parcels;
    public AddressInput $collection_address;
    public AddressInput $delivery_address;

    public bool $risk_cover;
    public bool $exclude_weekend;
    public bool $rica;
    public bool $consignee;
    public bool $sms_tracking;

    public function __construct(public ColliverySettings $colliverySettings)
    {
        $this->injectSettings();
    }

    /**
     * @throws ValidationException
     */
    public function fromQuoteRequest(QuoteRequest $quoteRequest): static
    {
        $this->service_ids = [
            WaybillService::NEXT_DAY,
            WaybillService::FREIGHT,
            WaybillService::ECONOMY,
        ];
        $averageParcelDimension = 20;
        $this->parcels = array_map(fn(LineItem $item) => [
            'length' => $averageParcelDimension,
            'width' => $averageParcelDimension,
            'height' => $averageParcelDimension,
            'weight' => round($item->grams/100, 2),
            'quantity' => $item->quantity,
        ], $quoteRequest->rate->items);

        $authData = (new AuthManager($this->colliverySettings->shop))->current();
        $this->collection_address = AddressInput::fromColliveryAuthData($authData);

        $destination = $quoteRequest->rate->destination;
        $this->delivery_address = AddressInput::fromShopifyQuoteAddress($destination);

        return $this;
    }

    public function fromOrder(Order $order): static
    {
        $this->service_ids = [
            WaybillService::NEXT_DAY,
            WaybillService::FREIGHT,
            WaybillService::ECONOMY,
        ];
        $averageParcelDimension = 20;
        $this->parcels = array_map(fn(LineItem $item) => [
            'length' => $averageParcelDimension,
            'width' => $averageParcelDimension,
            'height' => $averageParcelDimension,
            'weight' => round($item->grams/100, 2),
            'quantity' => $item->quantity,
        ], $order->line_items);


        $authData = (new AuthManager($this->colliverySettings->shop))->current();
        $this->collection_address = AddressInput::fromColliveryAuthData($authData);
        $this->delivery_address = AddressInput::fromShopifyOrder($order);

        return $this;
    }

    #[ArrayShape(['service_ids' => "mixed", 'parcels' => "mixed", 'collection_address' => "array", 'delivery_address' => "array", 'risk_cover' => "bool", 'exclude_weekend' => "bool", 'rica' => "bool", 'consignee' => "bool", 'sms_tracking' => "bool"])]
    public function toArray(): array
    {
        return [
            'service_ids' => $this->service_ids,
            'parcels' => $this->parcels,
            'collection_address' => $this->collection_address->toArray(),
            'delivery_address' => $this->delivery_address->toArray(),
            'risk_cover' => $this->risk_cover,
            'exclude_weekend' => $this->exclude_weekend,
            'rica' => $this->rica,
            'consignee' => $this->consignee,
            'sms_tracking' => $this->sms_tracking,
        ];
    }

    /**
     * @return void
     */
    private function injectSettings(): void
    {
        $this->risk_cover = $this->colliverySettings->settings->riskCover;
        $this->exclude_weekend = $this->colliverySettings->settings->excludeWeekends;
        $this->rica = $this->colliverySettings->settings->rica;
        $this->consignee = $this->colliverySettings->settings->consigneeOnly;
        $this->sms_tracking = $this->colliverySettings->settings->smsTracking;
    }
}

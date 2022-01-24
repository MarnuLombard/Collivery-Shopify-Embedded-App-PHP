<?php

namespace ShopifyPlugin\ShopifyApi\Responses;

use Illuminate\Contracts\Support\Arrayable;
use ShopifyPlugin\ColliveryApi\Models\Quote;
use ShopifyPlugin\ColliveryApi\Models\WaybillService;
use ShopifyPlugin\ColliveryApi\ResponseManagement\ColliveryResponseCollection;

class QuoteResponse implements Arrayable
{

    public function __construct(public ColliveryResponseCollection $quoteData)
    {
    }

    public function toArray(): array
    {
        return [
            'rates' => $this->quoteData->data->map(fn (Quote $quote) => [
                'service_name' => WaybillService::$texts[$quote->service_type],
                'service_code' => WaybillService::$briefNames[$quote->service_type],
                'total_price' => round($quote->total * 100),
                'currency' => 'ZAR',
                'min_delivery_date' => $this->getDeliveryDate($quote->service_type).' 08:00:00 +0200',
                'max_delivery_date' => $this->getDeliveryDate($quote->service_type).' 18:00:00 +0200',
            ])->toArray()
        ];
    }

    private function getDeliveryDate(int $serviceType): string
    {
        return substr($this->quoteData->meta->times->{$serviceType}->delivery_time, 0, 10);
    }
}

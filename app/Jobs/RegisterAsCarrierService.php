<?php

namespace ShopifyPlugin\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Osiset\BasicShopifyAPI\ResponseAccess;
use ShopifyPlugin\Models\Shop;

/**
 * @method static void dispatch(Shop $shop)
 * @method static void dispatchNow(Shop $shop)
 */
class RegisterAsCarrierService implements ShouldQueue, ShouldBeUnique
{
    private const CARRIER_SERVICE_DATA = [
        "name" => "Shipping Rate Provider",
        "callback_url" => "",
        "service_discovery" => true
    ];

    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    private Shop $shop;

    public function __construct(Shop $shop)
    {
        $this->shop = $shop;
    }

    public function handle(): void
    {
        $carrierServiceData = tap(
            self::CARRIER_SERVICE_DATA,
            function (array &$data) {
                $data['callback_url'] = route('webhook', ['type' => 'shipping_quote']);

                return $data;
            });

        /**
         * @var int            $status
         * @var ResponseAccess $body
         */
        ['status' => $status, 'body' => $body] = $this->shop->api()->rest(
            'POST',
            '/admin/api/carrier_services.json',
            ['carrier_service' => $carrierServiceData]
        );

        if ($status >= 200 && $status < 300) {
            \Log::debug("Registered as carrier service with {$this->shop->name}", (array) $body);
            $this->shop->update(['carrier_service_registered' => 1]);
        } else {
            \Log::debug("Error registering as carrier service with {$this->shop->name}", (array) $body);
        }
    }
}

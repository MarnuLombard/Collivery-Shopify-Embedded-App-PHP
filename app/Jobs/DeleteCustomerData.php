<?php

namespace ShopifyPlugin\Jobs;

use Osiset\ShopifyApp\Objects\Values\ShopDomain;
use ShopifyPlugin\Models\Shop;

trait DeleteCustomerData
{
    public function handle(): void
    {
        // Convert domain
        $this->shopDomain = ShopDomain::fromNative($this->shopDomain);

        try {
            \Log::debug(sprintf(
                'GDPR Delete request for %s received for shop %s',
                \Str::of(static::class)->snake()->upper(),
                $this->shopDomain->toNative(),
            ), ['payload' => $this->data]);

            $shop = Shop::where('name', $this->shopDomain->toNative())->first();
            $shop->colliverySettings()->delete();
            $shop->delete();

            return;
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
        }
    }
}

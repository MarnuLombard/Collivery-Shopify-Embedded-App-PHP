<?php

namespace ShopifyPlugin\Jobs;

use Osiset\ShopifyApp\Objects\Values\ShopDomain;

class CustomersDataRequestJob extends BaseWebhookJob
{
    public function handle(): void
    {
        // Convert domain
        $this->shopDomain = ShopDomain::fromNative($this->shopDomain);
        /**
         * @todo Queue up and email all customer/shop data to the user
         */
    }
}

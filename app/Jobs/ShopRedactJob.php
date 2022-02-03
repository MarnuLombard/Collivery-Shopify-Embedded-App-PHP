<?php

namespace ShopifyPlugin\Jobs;

class ShopRedactJob extends BaseWebhookJob
{
    use DeleteCustomerData;
}

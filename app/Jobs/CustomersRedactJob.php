<?php

namespace ShopifyPlugin\Jobs;

class CustomersRedactJob extends BaseWebhookJob
{
    use DeleteCustomerData;
}

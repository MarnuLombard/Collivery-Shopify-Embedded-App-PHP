<?php

namespace ShopifyPlugin\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Osiset\ShopifyApp\Objects\Values\ShopDomain;

abstract class BaseWebhookJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Shop's myshopify domain
     */
    public ShopDomain|string $shopDomain;

    /**
     * The webhook data
     */
    public \stdClass $data;

    /**
     * Create a new job instance.
     *
     * @param string    $shopDomain The shop's myshopify domain.
     * @param \stdClass $data The webhook data (JSON decoded).
     *
     * @return void
     */
    public function __construct(string $shopDomain, \stdClass $data)
    {
        $this->shopDomain = $shopDomain;
        $this->data = $data;
    }

    abstract public function handle(): void;
}

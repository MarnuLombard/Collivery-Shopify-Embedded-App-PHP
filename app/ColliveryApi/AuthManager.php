<?php

namespace ShopifyPlugin\ColliveryApi;

use ShopifyPlugin\ColliveryApi\Models\AuthData;
use ShopifyPlugin\Models\Shop;

class AuthManager
{
    private const STORAGE_KEY = 'collivery_auth_data';

    private Shop $shop;

    public function __construct(Shop $shop)
    {
        $this->shop = $shop;
    }

    public function current(): ?AuthData
    {
        $authData = \Session::get(self::STORAGE_KEY);
        if (!$authData && \Cache::has(self::STORAGE_KEY)) {
            // Session could have expired, let's retrieve from cache and set in session
            $authData = \Cache::get(self::STORAGE_KEY);
            \Session::put(self::STORAGE_KEY, $authData);
        }

        return $authData;
    }

    public function storeCurrent(AuthData $authData): void
    {
        \Cache::tags(self::STORAGE_KEY)->put($this->shop->id, $authData, now()->addWeek());
        \Session::put(self::STORAGE_KEY, $authData);
    }
}

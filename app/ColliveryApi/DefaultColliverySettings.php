<?php

/**
 * @noinspection PhpUnusedPrivateFieldInspection
 * @noinspection PhpUnusedPrivateMethodInspection
 */

namespace ShopifyPlugin\ColliveryApi;

use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

class DefaultColliverySettings
{
    private string $baseUrl;
    private string $appName = 'MDS Collivery Shopify';
    private string $appHost;
    private string $userName = 'api@collivery.co.za';
    private string $password = 'api123';
    private bool $riskCover = false;
    private bool $excludeWeekends = true;
    private bool $rica = false;
    private bool $consigneeOnly = false;
    private bool $smsTracking = false;
    private int $discount = 0;
    private bool $freeShipping = false;
    private int $freeShippingMinimum = 0;

    private function getBaseUrl(): string
    {
        return $this->isProduction()
            ? 'https://api.collivery.co.za/v3'
            : 'http://api.collivery.local/v3';
    }

    private function getAppHost(): string
    {
        $packageJson = json_decode(file_get_contents(base_path('node_modules/@shopify/polaris/package.json')));
        $polarisVersion = $packageJson->version;
        $laravelVersion = app()->version();

        return "Laravel $laravelVersion + Polaris $polarisVersion";
    }

    private function getAppVersion(): string
    {
        if (!$this->isProduction()) {
            return 'dev';
        }

        return exec('git rev-parse --short=10 HEAD') ?: 'unknown';
    }

    public function isProduction(): bool
    {
        return app()->environment() === 'production';
    }

    /**
     * @throws PropertyDoesNotExist
     */
    public function __get($name)
    {
        // Check whether we have a dynamic accessor for it
        $method = 'get'.ucfirst($name);

        if (method_exists(self::class, $method)) {
            return \Cache::tags('collivery_settings:default')
                ->remember($name, now()->addHours(12), fn() => $this->{$method}());
        }

        if (property_exists(self::class, $name)) {
            return $this->{$name};
        }

        throw new PropertyDoesNotExist(
            sprintf(
                "Could not access %s::\$%s. It doesn't exist.",
                self::class,
                $name
            )
        );
    }

}

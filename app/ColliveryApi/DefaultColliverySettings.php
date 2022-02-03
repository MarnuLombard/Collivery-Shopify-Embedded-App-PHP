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

    public function isProduction(): bool
    {
        return app()->environment() === 'production';
    }

    private function getAppHost(): string
    {
        $packageJson = json_decode(file_get_contents(base_path('node_modules/@shopify/polaris/package.json')));
        $polarisVersion = $packageJson->version;
        $laravelVersion = app()->version();

        return "Laravel $laravelVersion + Polaris $polarisVersion";
    }

    /**
     * @throws \InvalidArgumentException
     */
    private function getAppVersion(): string
    {
        if (!$this->isProduction()) {
            return 'dev';
        }

        $version = \Cache::remember(
            'collivery_settings:app_version',
            now()->addDay(),
            fn() => exec(sprintf(
                'git -C "%s" tag | tail -n 1',
                base_path()
            ))
        );

        if (!$version) {
            throw new \InvalidArgumentException(sprintf(
                "No version tag is defined in %s. Can't continue.",
                base_path()
            ));
        }

        return $version;
    }

}

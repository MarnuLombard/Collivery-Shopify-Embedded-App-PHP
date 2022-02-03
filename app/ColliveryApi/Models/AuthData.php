<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\ColliveryApi\ResponseManagement\IsResponseComposable;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;
use ShopifyPlugin\Models\ColliverySettings;
use ShopifyPlugin\Models\Shop;
use Symfony\Component\ErrorHandler\Error\ClassNotFoundError;

/**
 * @property Shop $shop
 */
class AuthData
{
    use IsResponseComposable {
        fromResponse as baseFromResponse;
    }

    public int $id;
    public string $full_name;
    public string $email_address;
    public ?string $landline_number;
    public ?string $mobile_number;
    public string $api_token;
    public Client $client;
    private ?Shop $shop;

    /**
     * @throws ClassNotFoundError
     * @throws PropertyDoesNotExist
     */
    public static function fromResponse(\stdClass $responseData, ?Shop $shop = null): self
    {
        $self = self::baseFromResponse($responseData->data);
        $self->shop = $shop;

        return $self;
    }

    /**
     * Dynamically access a Shop object that may have fallen from cache.
     *
     * @param string $name
     *
     * @return Shop|void|null
     */
    public function __get(string $name)
    {
        if ($name !== 'shop') {
            return;
        }

        if ($this->shop) {
            return $this->shop;
        }

        /** @var ColliverySettings $settings */
        $settings = ColliverySettings::whereJsonContains('settings->userName', $this->email_address)->first();

        if ($settings) {
            $this->shop = $settings->shop;

            return $settings->shop;
        }
    }
}

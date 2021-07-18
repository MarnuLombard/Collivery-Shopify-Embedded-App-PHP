<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\Exceptions\PropertyDoesNotExist;
use ShopifyPlugin\Models\Shop;
use Symfony\Component\ErrorHandler\Error\ClassNotFoundError;

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
    public ?Shop $shop;

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
}

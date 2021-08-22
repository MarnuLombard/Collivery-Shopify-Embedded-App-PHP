<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use ShopifyPlugin\ColliveryApi\Models\AuthData;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

class AuthRequest extends ApiRequest
{

    /**
     * @throws PropertyDoesNotExist
     * @throws HttpClientException
     */
    public function login(): AuthData
    {
        $settings = $this->colliverySettings->settings;
        $data = [
            'email' => $settings->userName,
            'password' => $settings->password,
        ];

        return AuthData::fromResponse($this->post('/login', $data));
    }
}

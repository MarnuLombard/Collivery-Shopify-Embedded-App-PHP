<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\Client\PendingRequest;
use ShopifyPlugin\ColliveryApi\Models\AuthData;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;
use ShopifyPlugin\Models\ColliverySettings;

class Request
{
    private ColliverySettings $colliverySettings;

    public function __construct(ColliverySettings $colliverySettings)
    {
        $this->colliverySettings = $colliverySettings;
    }

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

        $responseData = $this->getRequest()->post('/login', $data);

        if ($responseData->failed()) {
            throw new HttpClientException(
                $responseData->object()->message
                ?? $responseData->toPsrResponse()->getReasonPhrase()
            );
        }

        return AuthData::fromResponse($responseData->object());
    }

    protected function getRequest(): PendingRequest
    {
        $settings = $this->colliverySettings->settings;

        return \Http::acceptJson()
            ->asJson()
            ->baseUrl($settings->baseUrl)
            ->withHeaders($this->colliverySettings->headers)
            ->retry(3, 500);
    }
}

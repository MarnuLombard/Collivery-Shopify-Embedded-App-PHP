<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\Response;
use ShopifyPlugin\ColliveryApi\AuthManager;
use ShopifyPlugin\Models\ColliverySettings;

class ApiRequest
{
    protected ColliverySettings $colliverySettings;

    // Exclude the api token from these paths
    private array $excludeToken = [
        'login',
    ];

    public function __construct(ColliverySettings $colliverySettings)
    {
        $this->colliverySettings = $colliverySettings;
    }

    /**
     * @throws HttpClientException
     */
    protected function post(string $url, array $data = []): object
    {
        $data = $this->mergeTokenData($url, $data);
        $responseData = $this->getRequest()->post($url, $data);
        $this->validateResponse($responseData);

        return $responseData->object();
    }

    /**
     * @throws HttpClientException
     */
    protected function get(string $url, array $query = []): object
    {
        $query = $this->mergeTokenData($url, $query);
        $responseData = $this->getRequest()->get($url, $query);
        $this->validateResponse($responseData);

        return $responseData->object();
    }

    private function mergeTokenData(string $path, array $queryOrData = []): array
    {
        $path = str_replace('/', '', $path);

        if (in_array($path, $this->excludeToken, true)) {
            return $queryOrData;
        }

        $token = (new AuthManager($this->colliverySettings->shop))->current()->api_token;

        return (array_merge($queryOrData, ['api_token' => $token]));
    }

    private function getRequest(): PendingRequest
    {
        $settings = $this->colliverySettings->settings;

        return \Http::acceptJson()
            ->asJson()
            ->baseUrl($settings->baseUrl)
            ->withHeaders($this->colliverySettings->headers)
            ->retry(3, 500);
    }

    /**
     * @throws HttpClientException
     */
    private function validateResponse(Response $responseData): void
    {
        if ($responseData->failed()) {
            throw new HttpClientException(
                $responseData->object()->message
                ?? $responseData->toPsrResponse()->getReasonPhrase()
            );
        }
    }
}

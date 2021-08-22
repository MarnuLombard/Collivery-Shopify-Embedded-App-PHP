<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use ShopifyPlugin\ColliveryApi\Models\Waybill;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

class WaybillApiRequest extends ApiRequest
{
    /**
     * @throws PropertyDoesNotExist
     * @throws HttpClientException
     */
    public function show(int $id): ?Waybill
    {
        return Waybill::fromResponse($this->get("/waybill/$id")->data);
    }
}

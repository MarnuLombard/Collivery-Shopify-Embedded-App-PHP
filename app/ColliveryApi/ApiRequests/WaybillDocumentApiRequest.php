<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use ShopifyPlugin\ColliveryApi\Models\WaybillDocument;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

class WaybillDocumentApiRequest extends ApiRequest
{
    /**
     * @throws PropertyDoesNotExist
     * @throws HttpClientException
     */
    public function waybill(int $waybillId)
    {
        return WaybillDocument::fromResponse($this->get("waybill_documents/$waybillId/waybill")->data);
    }
}

<?php

namespace ShopifyPlugin\Http\Controllers;

use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\JsonResponse;
use ShopifyPlugin\ColliveryApi\ApiRequests\WaybillApiRequest;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;
use ShopifyPlugin\Models\Shop;

class WaybillController
{
    /**
     * @throws PropertyDoesNotExist
     * @throws HttpClientException
     */
    public function index(): JsonResponse
    {
        /** @var Shop $shop */
        $shop = \Auth::user();
        $waybillRequest = new WaybillApiRequest($shop->colliverySettings);

        return response()->json(['data' => $waybillRequest->index()->data->toArray()]);
    }

    public function show(int $waybill): JsonResponse
    {
        /** @var Shop $shop */
        $shop = \Auth::user();
        $waybillRequest = new WaybillApiRequest($shop->colliverySettings);

        return response()->json(['data' => $waybillRequest->show($waybill)]);

    }
}

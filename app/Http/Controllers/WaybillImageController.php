<?php

namespace ShopifyPlugin\Http\Controllers;

use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\Client\RequestException;
use ShopifyPlugin\ColliveryApi\ApiRequests\WaybillDocumentApiRequest;
use Symfony\Component\HttpFoundation\Response;

class WaybillImageController extends Controller
{
    public function show($waybill)
    {
        $user = \Auth::user();
        try {
            $apiRequest = new WaybillDocumentApiRequest($user->colliverySettings);
            $waybillDocument = $apiRequest->waybill($waybill);

            return response()->json(['data' => $waybillDocument]);
        } catch (HttpClientException $e) {
            $code = $e instanceof RequestException
                ? $e->response->status()
                : Response::HTTP_INTERNAL_SERVER_ERROR;

            return response()->json(['error' => $e->getMessage()], $code);
        } catch (\ImagickException $e) {
            return response()->json(['error' => 'Server error processing image'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

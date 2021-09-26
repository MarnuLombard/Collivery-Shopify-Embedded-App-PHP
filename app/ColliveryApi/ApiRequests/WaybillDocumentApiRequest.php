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
     * @throws \ImagickException
     */
    public function waybill(int $waybillId): WaybillDocument
    {
        $response = $this->get("waybill_documents/$waybillId/waybill");
        $waybillDocument = WaybillDocument::fromResponse($response->data);

        $image = new \Imagick();
        $image->setResolution(200, 200);
        $image->setCompression(\Imagick::COMPRESSION_LOSSLESSJPEG);
        $image->setCompressionQuality(80);
        // Now load the pixels
        $image->readImageBlob(base64_decode($waybillDocument->image));
        $image->stripImage();

        $image->setImageResolution(200, 200);
        $image->setFormat('jpg');
        $image->setImageFormat('jpg');
        $image->setImageFilename("$waybillId.jpg");

        $waybillDocument->image = base64_encode($image->__toString());

        return $waybillDocument;
    }
}

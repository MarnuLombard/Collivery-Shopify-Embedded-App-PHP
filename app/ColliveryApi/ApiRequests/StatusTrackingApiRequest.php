<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use ShopifyPlugin\ColliveryApi\Models\StatusTracking;
use ShopifyPlugin\ColliveryApi\ResponseManagement\ColliveryResponseCollection;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

class StatusTrackingApiRequest extends ApiRequest
{

    /**
     * @throws HttpClientException
     * @throws PropertyDoesNotExist
     *
     * @return StatusTracking[]|ColliveryResponseCollection
     */
    public function index(): ColliveryResponseCollection
    {
        /**
         * array_intersect(
         * \Collivery\Models\Status::getActive(),
         * array_keys(\Collivery\Models\Status::getInUse())
         * )
         */
        $statuses = '2,3,7,9,10,11,12,14,15,16,17,18,19,20,21,22,27,29,30,31,33,34';

        return StatusTracking::fromResponseToCollection(
            $this->get('status_tracking', ['statuses' => $statuses])
        );
    }
}

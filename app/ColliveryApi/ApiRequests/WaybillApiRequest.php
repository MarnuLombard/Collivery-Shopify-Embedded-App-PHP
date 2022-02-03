<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use ShopifyPlugin\ColliveryApi\Models\Waybill;
use ShopifyPlugin\ColliveryApi\ResponseManagement\ColliveryResponseCollection;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

class WaybillApiRequest extends ApiRequest
{
    /**
     * @throws HttpClientException
     * @throws PropertyDoesNotExist
     * @return Waybill[]|ColliveryResponseCollection
     */
    public function index(): ColliveryResponseCollection
    {
        /**
         * array_intersect(
         * \Collivery\Models\Status::getActive(),
         * array_keys(\Collivery\Models\Status::getInUse())
         * )
         */
        $statuses = '2,3,7,9,10,11,12,14,15,16,17,18,19,21,27,29,30,31,34';
        $startDate = now()->subMonth();

        return Waybill::fromResponseToCollection(
            $this->get('waybill', [
                'statuses' => $statuses,
                'start_date' => $startDate->toDateString(),
            ])
        );
    }

    /**
     * @throws PropertyDoesNotExist
     * @throws HttpClientException
     */
    public function show(int $id): ?Waybill
    {
        return Waybill::fromResponse(
            $this->get(
                "/waybill/$id",
                ['include' => ['collection_address', 'delivery_address']]
            )->data
        );
    }
}

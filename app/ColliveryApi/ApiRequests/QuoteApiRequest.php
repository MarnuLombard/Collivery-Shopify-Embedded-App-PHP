<?php

namespace ShopifyPlugin\ColliveryApi\ApiRequests;

use Illuminate\Http\Client\HttpClientException;
use ShopifyPlugin\ColliveryApi\InputData\QuoteInput;
use ShopifyPlugin\ColliveryApi\Models\Quote;
use ShopifyPlugin\ColliveryApi\ResponseManagement\ColliveryResponseCollection;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

class QuoteApiRequest extends ApiRequest
{
    /**
     * @throws PropertyDoesNotExist
     * @throws HttpClientException
     */
    public function show(QuoteInput $quoteInput): ColliveryResponseCollection
    {
        return Quote::fromResponseToCollection(
            $this->post('quote', $quoteInput->toArray())
        );
    }

}

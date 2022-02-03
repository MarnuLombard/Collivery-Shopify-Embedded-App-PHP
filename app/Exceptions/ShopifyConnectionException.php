<?php

namespace ShopifyPlugin\Exceptions;

use GuzzleHttp\Exception\TransferException;
use Psr\Http\Client\ClientExceptionInterface;

class ShopifyConnectionException extends \RuntimeException implements ClientExceptionInterface
{
    public array $context = [];

    public static function fromGuzzleException(TransferException $e)
    {
        $self = new self($e->getMessage(), $e->code, $e->getPrevious());

        if (method_exists($e, 'getHandlerContext')) {
            $self->context = $e->getHandlerContext();
        }
        if (method_exists($e, 'getRequest')) {
            $self->context['request'] = $e->getRequest();
        }
        if (method_exists($e, 'getResponse')) {
            $self->context['response'] = $e->getResponse();
        }

        return $self;
    }
}

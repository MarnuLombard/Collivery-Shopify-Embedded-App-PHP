<?php

namespace ShopifyPlugin\Exceptions;

class PropertyDoesNotExist extends \ErrorException
{
    public static function make(string $class, string $methodName): self
    {
        return new self(sprintf(
            'Could not access %s::$%s. It doesn\'t exist.',
            $class,
            $methodName,
        ));
    }
}

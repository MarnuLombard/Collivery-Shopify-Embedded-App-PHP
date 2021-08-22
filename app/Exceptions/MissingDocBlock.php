<?php

namespace ShopifyPlugin\Exceptions;

class MissingDocBlock extends \RuntimeException
{
    public static function arrayDocBlockMissing(string $class, string $methodName): self
    {
        return new self(sprintf(
            "Could not infer class from %s::\$%s. The doc-block for array is not correctly defined." ,
            $class,
            $methodName,
        ));
    }
}

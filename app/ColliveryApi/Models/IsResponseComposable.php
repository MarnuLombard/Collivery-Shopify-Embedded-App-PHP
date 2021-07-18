<?php

namespace ShopifyPlugin\ColliveryApi\Models;

use ShopifyPlugin\Exceptions\ClassDoesNotExist;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

trait IsResponseComposable
{
    /**
     * @throws PropertyDoesNotExist
     */
    public static function fromResponse(\stdClass $responseData): self
    {
        $self = new static();

        foreach ((array) $responseData as $key => $value) {
            if (!property_exists($self, $key)) {
                throw PropertyDoesNotExist::make(static::class, $key);
            }

            if (is_object($value)) {
                $className = __NAMESPACE__.'\\'.\Str::studly($key);
                if (!class_exists($className)) {
                    throw new ClassDoesNotExist('Class for object composition '.$className.' does not exist');
                }
                $value = call_user_func([$className, 'fromResponse'], $value);
            }

            $self->{$key} = $value;
        }

        return $self;
    }
}

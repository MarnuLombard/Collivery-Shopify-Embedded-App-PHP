<?php

namespace ShopifyPlugin\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use ShopifyPlugin\ColliveryApi\ColliverySettingsCollection;

class ColliverySettingsCollectionCast implements CastsAttributes
{

    /**
     * @param Model                       $model
     * @param ColliverySettingsCollection $value
     *
     * @throws \JsonException
     */
    public function get($model, string $key, $value, array $attributes): ColliverySettingsCollection
    {
        if (!$value) {
            return ColliverySettingsCollection::fromDefault();
        }

        $settings = json_decode($value, false, 3, JSON_FORCE_OBJECT | JSON_THROW_ON_ERROR);

        return ColliverySettingsCollection::fromDatabase($settings);
    }

    /**
     * @param Model                       $model
     * @param ColliverySettingsCollection $value
     *
     * @throws \JsonException
     */
    public function set($model, string $key, $value, array $attributes): array
    {
        return [$key => $value->toDatabase()];
    }
}

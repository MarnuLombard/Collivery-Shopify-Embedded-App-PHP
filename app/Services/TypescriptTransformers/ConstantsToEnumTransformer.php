<?php

namespace ShopifyPlugin\Services\TypescriptTransformers;

use Spatie\TypeScriptTransformer\Structures\TransformedType;
use Spatie\TypeScriptTransformer\Transformers\Transformer;
use Spatie\TypeScriptTransformer\TypeScriptTransformerConfig;

class ConstantsToEnumTransformer implements Transformer
{
    public function __construct(protected TypeScriptTransformerConfig $config)
    {
    }

    public function transform(\ReflectionClass $class, string $name): ?TransformedType
    {
        return $this->config->shouldTransformToNativeEnums()
            ? $this->toEnum($class, $name)
            : $this->toType($class, $name);
    }

    private function toEnum(\ReflectionClass $class, string $name): TransformedType
    {
        $constants = $class->getConstants();

        $options = array_map(
            fn($key, $value) => "{$key} = ".(is_string($value) ? "'{$value}'" : "{$value}"),
            array_keys($constants),
            $constants
        );

        return TransformedType::create(
            $class,
            $name,
            PHP_EOL.implode(','.PHP_EOL, $options).PHP_EOL,
            keyword: 'enum'
        );
    }

    private function toType(\ReflectionClass $class, string $name): TransformedType
    {
        $constants = $class->getConstants();

        $options = array_map(
            fn($value) => is_string($value) ? "'{$value}'" : "{$value}",
            array_values($constants)
        );

        return TransformedType::create(
            $class,
            $name,
            implode(' | ', $options),
        );
    }
}

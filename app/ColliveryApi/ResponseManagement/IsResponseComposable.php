<?php

namespace ShopifyPlugin\ColliveryApi\ResponseManagement;

use Barryvdh\Reflection\DocBlock;
use Barryvdh\Reflection\DocBlock\Tag;
use ShopifyPlugin\Exceptions\ClassDoesNotExist;
use ShopifyPlugin\Exceptions\MissingDocBlock;
use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

trait IsResponseComposable
{
    private static string $modelNamespace = 'ShopifyPlugin\ColliveryApi\Models';

    /**
     * @throws PropertyDoesNotExist
     * @throws ClassDoesNotExist
     * @throws MissingDocBlock
     */
    public static function fromResponse(\stdClass $responseData): self
    {
        $self = new static();

        foreach ((array) $responseData as $key => $value) {
            if (!property_exists($self, $key)) {
                throw PropertyDoesNotExist::make(static::class, $key);
            }

            if (is_object($value)) {
                $className = $self::$modelNamespace.'\\'.\Str::studly($key);
                if (!class_exists($className)) {
                    throw new ClassDoesNotExist('Class for object composition '.$className.' does not exist');
                }
                $value = call_user_func([$className, 'fromResponse'], $value);
            }

            if (is_array($value)) {
                try {
                    $reflection = new \ReflectionProperty($self, $key);
                } catch (\ReflectionException $e) {
                    throw PropertyDoesNotExist::make(static::class, $key);
                }
                $docBlock = new DocBlock($reflection->getDocComment());
                /** @var Tag $tag */
                $tag = head($docBlock->getTagsByName('var'));

                if (!$tag) {
                    throw MissingDocBlock::arrayDocBlockMissing(static::class, $key);
                }

                $className = \Str::of($tag->getType())
                    ->remove('[]', '') //<-- in case of array notation
                    ->remove(static::$modelNamespace) //<-- In case the FQNS is used
                    ->ltrim('\\') // <-- The docblock parser returns a root NS type
                    ->prepend('\\'.static::$modelNamespace.'\\')
                    ->__toString();


                $value = call_user_func([$className, 'fromResponseArray'], $value);
            }

            $self->{$key} = $value;
        }

        return $self;
    }

    /**
     * Compose many of `static` from the response input
     */
    public static function fromResponseArray(array $responseData): array
    {
        return collect($responseData)
            ->map(fn (\stdClass $datum) => static::fromResponse($datum))
            ->toArray();
    }

    /**
     * @throws PropertyDoesNotExist
     */
    public static function fromResponseToCollection(\stdClass $response): ColliveryResponseCollection
    {
        $data = array_map(fn ($datum) => static::fromResponse($datum), $response->data);

        return new ColliveryResponseCollection($data, $response->links ?? null, $response->meta ?? null);
    }
}

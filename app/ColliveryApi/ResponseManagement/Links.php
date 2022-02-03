<?php

namespace ShopifyPlugin\ColliveryApi\ResponseManagement;

use Illuminate\Contracts\Support\Arrayable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class Links implements Arrayable
{
    public string $first;
    public string $last;
    public ?string $next;
    public ?string $prev;

    public function __construct(\stdClass $input)
    {
        // Simplest way to merge two objects
        // Equivalent of JS `Object.assign()`
        $input = (object)((array)$input + (array)self::null());

        $this->first = $input->first;
        $this->last = $input->last;
        $this->next = $input->next;
        $this->prev = $input->prev;
    }

    public static function null(): \stdClass
    {
        return (object)[
            'first' => '',
            'last' => '',
            'next' => null,
            'prev' => null,
        ];
    }

    public function toArray(): array
    {
        return (array)$this;
    }
}

<?php

namespace ShopifyPlugin\ColliveryApi\ResponseManagement;

use Illuminate\Contracts\Support\Arrayable;

class Links implements Arrayable
{
    public string $first;
    public string $last;
    public ?string $next;
    public ?string $prev;

    public function __construct(\stdClass $input)
    {
        $this->first = $input->first;
        $this->last = $input->last;
        $this->next = $input->next;
        $this->prev = $input->prev;
    }

    public function toArray(): array
    {
        return (array) $this;
    }
}

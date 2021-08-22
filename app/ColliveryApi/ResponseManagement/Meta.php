<?php

namespace ShopifyPlugin\ColliveryApi\ResponseManagement;

use Illuminate\Contracts\Support\Arrayable;

class Meta implements Arrayable
{
    public int $current_page;
    public int $last_page;
    public string $path;
    public int $per_page;
    public int $total;
    public ?int $from;
    public ?int $to;
    private array $etc = [];

    public function __construct(\stdClass $input)
    {
        $this->current_page = $input->current_page;
        $this->last_page = $input->last_page;
        $this->path = $input->path;
        $this->per_page = $input->per_page;
        $this->total = $input->total;
        $this->from = $input->from;
        $this->to = $input->to;

        $etc = (array) $input;

        unset(
            $etc['current_page'],
            $etc['last_page'],
            $etc['path'],
            $etc['per_page'],
            $etc['total'],
            $etc['from'],
            $etc['to'],
        );

        $this->etc = $etc;
    }

    public function __get($name)
    {
        return $this->etc[$name] ?? null;
    }

    public function toArray(): array
    {
        return (array) $this;
    }
}

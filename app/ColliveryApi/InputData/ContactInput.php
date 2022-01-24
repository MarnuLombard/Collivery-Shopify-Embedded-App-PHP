<?php

namespace ShopifyPlugin\ColliveryApi\InputData;

use Illuminate\Contracts\Support\Arrayable;
use JetBrains\PhpStorm\ArrayShape;
use ShopifyPlugin\ColliveryApi\Models\AuthData;
use ShopifyPlugin\ShopifyApi\Models\Order;
use ShopifyPlugin\ShopifyApi\Models\QuoteAddress;

class ContactInput implements Arrayable
{
    public ?string $email;
    public string $full_name;
    public string $cellphone;

    public static function fromColliveryAuthData(AuthData $authData): ContactInput
    {
        $self = new self();
        $self->email = $authData->shop->email;
        $self->full_name = $authData->full_name;
        $self->cellphone = $authData->mobile_number;

        return $self;
    }

    public static function fromShopifyQuoteAddress(QuoteAddress $quoteAddress): ContactInput
    {
        $self = new self();
        $self->email = $quoteAddress->email;
        $self->full_name = implode(' ', array_filter([$quoteAddress->first_name, $quoteAddress->name]));
        $self->cellphone = $quoteAddress->phone || '';

        return $self;
    }

    public static function fromShopifyOrder(Order $order): self
    {
        $self = new self();
        $self->email = $order->email;
        $self->full_name = $order->name;
        $self->cellphone = $order->phone || '';

        return $self;
    }

    #[ArrayShape(['email' => "null|string", 'full_name' => "string", 'cellphone' => "string"])]
    public function toArray(): array
    {
        return [
            'email' => $this->email,
            'full_name' => $this->full_name,
            'cellphone' => $this->cellphone,
        ];
    }
}

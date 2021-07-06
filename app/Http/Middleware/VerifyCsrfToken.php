<?php

namespace ShopifyPlugin\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * ALL ROUTES DISABLED
     * You must disable CSRF as there is currently
     * no solution for verifying session tokens with CSRF,
     * there is a conflict due to new login creation each request.
     *
     * Shopify is responsible for sending the requests.
     * We verify requests with them
     */
    protected $except = [
        '*'
    ];
}

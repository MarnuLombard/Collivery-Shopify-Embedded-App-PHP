<?php

namespace ShopifyPlugin\Http\Middleware;

use Illuminate\Http\Request;
use ShopifyPlugin\ColliveryApi\ApiRequests\Request as ColliveryRequest;
use ShopifyPlugin\ColliveryApi\AuthManager;
use ShopifyPlugin\Models\ColliverySettings;

class ColliveryAuthMiddleware
{

    private AuthManager $authManager;

    public function __construct(AuthManager $authManager)
    {
        $this->authManager = $authManager;
    }

    /**
     * @param Request|mixed $request
     * @param \Closure      $next
     *
     * @throws \Throwable
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        if ($this->authManager->current()) {
            return $next($request);
        }

        /**
         * This middleware will need to work in consort with ColliverySettingsMiddleware
         * as this will *always* require a `User::$colliverySettings` property to exist
         * @var ColliverySettings $colliverySettings
         */
        $colliverySettings = $request->user()->colliverySettings;

        throw_if(
            !$colliverySettings,
            \LogicException::class,
            'The collivery settings middleware has not run.'
        );

        // By now we've verified that the settings are stored, but no session exists
        // for the collivery authentication data

        $authData = (new ColliveryRequest($colliverySettings))->login();
        $this->authManager->storeCurrent($authData);

        return $next($request);
    }
}

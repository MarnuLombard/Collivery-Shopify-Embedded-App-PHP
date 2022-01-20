<?php

namespace ShopifyPlugin\Http\Middleware;

use Illuminate\Http\Request;
use ShopifyPlugin\ColliveryApi\ApiRequests\AuthRequest;
use ShopifyPlugin\ColliveryApi\AuthManager;
use ShopifyPlugin\Models\ColliverySettings;

class ColliveryAuthMiddleware
{

    /**
     * @param Request|mixed $request
     * @param \Closure      $next
     *
     * @throws \Throwable
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        $shop = $request->user();
        $authManager = new AuthManager($shop);

        if ($authManager->current()) {
            return $next($request);
        }

        /**
         * This middleware will need to work in consort with ColliverySettingsMiddleware
         * as this will *always* require a `User::$colliverySettings` property to exist
         *
         * @var ColliverySettings $colliverySettings
         */
        $colliverySettings = $shop->colliverySettings;

        throw_if(
            !$colliverySettings,
            \LogicException::class,
            'The collivery settings middleware has not run.'
        );

        // By now we've verified that the settings are stored, but no session exists
        // for the collivery authentication data

        $authData = (new AuthRequest($colliverySettings))->login();
        $authManager->storeCurrent($authData);

        return $next($request);
    }
}

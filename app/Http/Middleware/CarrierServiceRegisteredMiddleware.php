<?php

namespace ShopifyPlugin\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use ShopifyPlugin\Jobs\RegisterAsCarrierService;

class CarrierServiceRegisteredMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request  $request
     * @param \Closure $next
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next): mixed
    {
        $user = $request->user();
        if ($user && !$user->carrier_service_registered) {
            RegisterAsCarrierService::dispatchNow($request->user());
        }

        return $next($request);
    }
}

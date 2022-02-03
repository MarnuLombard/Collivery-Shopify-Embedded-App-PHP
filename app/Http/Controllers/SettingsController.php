<?php

namespace ShopifyPlugin\Http\Controllers;

use Illuminate\Http\JsonResponse;
use ShopifyPlugin\ColliveryApi\ColliverySettingsCollection;
use ShopifyPlugin\Http\Requests\SettingsRequest;

class SettingsController extends Controller
{
    public function index()
    {
        return response()->json(['data' => \Auth::user()->colliverySettings->settings]);
    }

    public function store(SettingsRequest $request): JsonResponse
    {
        $update = ColliverySettingsCollection::fromDatabase((object)$request->all());

        $colliverySettings = \Auth::user()->colliverySettings;
        $colliverySettings->update(['settings' => $update]);

        return response()->json(['data' => $update->toArray()]);
    }

}

<?php

namespace ShopifyPlugin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'userName' => 'required|email',
            'password' => 'required',
            'riskCover' => 'required|boolean',
            'excludeWeekends' => 'required|boolean',
            'rica' => 'required|boolean',
            'consigneeOnly' => 'required|boolean',
            'smsTracking' => 'required|boolean',
            'discount' => 'nullable|number|min:0|max:100',
            'freeShipping' => 'required|boolean',
            'freeShippingMinimum' => 'nullable|number|min:0',
            'loading' => 'required|boolean',
            'successActive' => 'required|boolean',
            'errorActive' => 'required|boolean',
        ];
    }
}

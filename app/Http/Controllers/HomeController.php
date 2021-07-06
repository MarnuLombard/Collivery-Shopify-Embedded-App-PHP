<?php


namespace ShopifyPlugin\Http\Controllers;


class HomeController
{
    public function __invoke()
    {
        $user = \Auth::user();

        return view('app', compact('user'));
    }
}

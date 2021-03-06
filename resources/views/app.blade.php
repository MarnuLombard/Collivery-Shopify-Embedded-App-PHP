@extends('shopify-app::layouts.default')
@section('styles')
  @parent
  <script src="https://mds-integrated-test.collivery.co.za:8097"></script>
  <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
@endsection

@section('content')
    <div id="app"></div>
@endsection

@section('scripts')
    @parent

    <script>
        var pluginHost = "{{ config('app.domain') }}";
        var apiKey = "{{ \Osiset\ShopifyApp\Util::getShopifyConfig('api_key', $shopDomain ?? optional($user)->name ) }}";
        var shopOrigin = "{{ $shopDomain ?? optional($user)->name }}";
    </script>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script>
        actions.TitleBar.create(app, {title: 'Welcome'});
    </script>
@endsection

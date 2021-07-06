@extends('shopify-app::layouts.default')
@section('styles')
  @parent

  <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
@endsection

@section('content')
  <div id="app"></div>
@endsection

@section('scripts')
  @parent

  <script>
    actions.TitleBar.create(app, { title: 'Welcome' });
  </script>
  <script>
    var pluginHost = "{{ config('app.domain') }}";
    var apiKey = "{{ \Osiset\ShopifyApp\Util::getShopifyConfig('api_key', $shopDomain ?? $user->name ) }}";
    var shopOrigin = "{{ $shopDomain ?? $user->name }}";
  </script>
  <script src="{{ mix('/js/app.js') }}"></script>
@endsection

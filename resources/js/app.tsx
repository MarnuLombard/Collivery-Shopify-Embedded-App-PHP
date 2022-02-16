import './types/generated';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/_app';
import route from './lib/Helpers/Route';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuoteOrder from './pages/QuoteOrder';
import Settings from './pages/Settings';
import {Route, Switch} from 'react-router-dom';

const apiKey = window.apiKey;
const shop = window.shopOrigin;
const pluginHost = window.pluginHost;

const current = route().current() || 'home';
const element = document.getElementById('app');

const params = new URL(document.location.href).searchParams;
const indexPath = new URL(route('home')).pathname;
const settingsPath = new URL(route('settings')).pathname;
const ordersQuotePath = new URL(route('orders.quote')).pathname;

ReactDOM.render(
  <App apiKey={apiKey} shop={shop} pluginHost={pluginHost}>
    <Switch>
      <Route path={indexPath} exact={true}>
        <Home />
      </Route>
      <Route path={settingsPath}>
        <Settings />
      </Route>
      <Route path={ordersQuotePath}>
        <QuoteOrder orderId={Number(params.get('id'))} />
      </Route>
      <Route path="*">
        <NotFound current={current} />
      </Route>
    </Switch>
  </App>,
  element
);

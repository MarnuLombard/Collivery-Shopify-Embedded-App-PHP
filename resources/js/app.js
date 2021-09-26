import React from 'react';
import ReactDOM from 'react-dom';
import Collivery from './pages/_app';
import route from './lib/Helpers/Route';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import {Route, Switch} from 'react-router-dom';

const apiKey = window.apiKey;
const shop = window.shopOrigin;
const pluginHost = window.pluginHost;

const current = route().current();
const element = document.getElementById('app');

ReactDOM.render(
    <Collivery apiKey={apiKey} shop={shop} pluginHost={pluginHost}>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="*">
          <NotFound current={current}/>
        </Route>
      </Switch>
    </Collivery>,
    element
);

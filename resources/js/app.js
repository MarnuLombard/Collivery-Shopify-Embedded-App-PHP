import React from 'react'
import ReactDOM from 'react-dom'
import Collivery from "./pages/_app";
import route from "./lib/Helpers/Route";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";

const apiKey = window.apiKey;
const shop = window.shopOrigin;
const pluginHost = window.pluginHost;
const routesMap = new Map([
  ['home', Home],
  ['settings', Settings]
]);

const current = route().current();
const element = document.getElementById('app');

if (!routesMap.has(current)) {
  ReactDOM.render(
    <Collivery shop={shop} pluginHost={pluginHost}>
      <NotFound current={current}/>
    </Collivery>,
    element
  );
} else {
  // noinspection JSValidateTypes
  /** @var {Component} component */
  const ThisComponent = routesMap.get(current)

  ReactDOM.render(
    <Collivery apiKey={apiKey} shop={shop} pluginHost={pluginHost}>
      <ThisComponent/>
    </Collivery>,
    element
  );

}


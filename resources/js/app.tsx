import 'react/jsx-runtime';
import './types/window';
import ColliveryProvider from './components/ColliveryProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import Translations from '@shopify/polaris/locales/en.json';
import {AppConfig} from '@shopify/app-bridge/client/types';
import {AppProvider} from '@shopify/polaris';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '@shopify/app-bridge-react';
import {Buffer} from 'buffer';

const apiKey = window.apiKey;
const shop = window.shopOrigin;
const pluginHost = window.pluginHost;
const element = document.getElementById('app');

const shopifyConfig: AppConfig = {
  apiKey,
  host: Buffer.from(shop, 'base64').toString(),
  forceRedirect: true,
};

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider config={shopifyConfig}>
        <AppProvider i18n={Translations}>
          <ColliveryProvider pluginHost={pluginHost} shopifyApiKey={apiKey} shop={shop}></ColliveryProvider>
          <Router />
        </AppProvider>
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  element
);

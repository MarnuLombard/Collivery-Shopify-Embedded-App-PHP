import {AppProvider} from '@shopify/polaris';
import {Provider} from '@shopify/app-bridge-react';
import React, {PropsWithChildren} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Translations from '@shopify/polaris/locales/en.json';
import ColliveryProvider from '../components/ColliveryProvider';
import Router from '../components/Router';
import '../types/window';
import {AppConfig} from "@shopify/app-bridge/client/types";

type Props = { shop: string, apiKey: string, pluginHost: string };

const App: React.FC<Props>  = (props: PropsWithChildren<Props>): JSX.Element => {
  const { shop, apiKey, pluginHost }: Props = props;

  const shopifyConfig: AppConfig = {
    apiKey,
    host: btoa(shop),
    forceRedirect: true,
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Provider config={shopifyConfig}>
          <AppProvider i18n={Translations}>
            <ColliveryProvider pluginHost={pluginHost} shopifyApiKey={apiKey} shop={shop}>
              {props.children}
            </ColliveryProvider>
            <Router />
          </AppProvider>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

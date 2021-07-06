import {AppProvider} from '@shopify/polaris';
import {Provider} from '@shopify/app-bridge-react';
import React, {PropsWithChildren} from 'react';
import Translations from '@shopify/polaris/locales/en.json';
import ColliveryProvider from '../components/ColliveryProvider';
import ClientRouter from "../components/ClientRouter";
import '../types/window';
import {AppConfig} from "@shopify/app-bridge/client/types";

type Props = { shop: string, apiKey: string, pluginHost: string };

const Collivery: React.FC<Props>  = (props: PropsWithChildren<Props>): JSX.Element => {
  const { shop, apiKey, pluginHost }: Props = props;

  const shopifyConfig: AppConfig = {
    apiKey,
    host: btoa(shop),
    forceRedirect: true,
  };

  return (
    <React.Fragment>
      <Provider config={shopifyConfig}>
        <ClientRouter />
        <AppProvider i18n={Translations}>
          <ColliveryProvider pluginHost={pluginHost} shopifyApiKey={apiKey} shop={shop}>
            {props.children}
          </ColliveryProvider>
        </AppProvider>
      </Provider>
    </React.Fragment>
  );
}

export default Collivery;

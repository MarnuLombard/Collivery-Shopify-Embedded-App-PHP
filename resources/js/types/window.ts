import route from "../lib/Helpers/Route";
import Utils from '@shopify/app-bridge-utils';
import {ClientApplication} from "@shopify/app-bridge/client/types";
import AppBridge from "@shopify/app-bridge";
import Actions from '@shopify/app-bridge/actions';

declare global {
  interface Window {
    apiKey: string,
    shopOrigin: string,
    pluginHost: string,
    route: typeof route,
    app: ClientApplication<any>,
    utils: typeof Utils,
    AppBridge: typeof AppBridge,
    Actions: typeof Actions
  }
}

declare var window : Window & typeof globalThis;

export {}

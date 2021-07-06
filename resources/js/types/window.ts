import route from "../lib/Helpers/Route";
import {ClientApplication} from "@shopify/app-bridge/client/types";

declare global {
  interface Window {
    apiKey: string,
    shopOrigin: string,
    pluginHost: string,
    route: typeof route,
    app: ClientApplication<any>,
  }
}

declare var window : Window & typeof globalThis;

export {}

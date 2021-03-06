import route from '../lib/Helpers/Route';
import * as Utils from '@shopify/app-bridge-utils';
import {ClientApplication} from '@shopify/app-bridge/client/types';

declare global {
  interface Window {
    apiKey: string;
    shopOrigin: string;
    pluginHost: string;
    route: typeof route;
    app: ClientApplication<any>;
    utils: Utils.AuthorizedFetchOptions;
    Ziggy: {
      url: string;
      port: number | null;
      defaults: object;
      routes: Record<string, {uri: string; methods: string[]; wheres?: {plan: string}}>;
    };
  }
}

// eslint-disable-next-line no-var
declare var window: Window & typeof globalThis;

export {};

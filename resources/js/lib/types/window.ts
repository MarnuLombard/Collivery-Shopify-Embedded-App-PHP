import route from "../Helpers/Route";

declare global {
  interface Window {
    apiKey: string
    pluginHost: string,
    route: typeof route
  }
}

declare var window : Window & typeof globalThis;

export {}

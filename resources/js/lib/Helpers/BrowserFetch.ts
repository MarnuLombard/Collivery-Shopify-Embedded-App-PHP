import {authenticatedFetch} from '@shopify/app-bridge-utils';
import {ClientApplication} from '@shopify/app-bridge';
import {ReactNode} from 'react';

export type FetchInterface<R> = (uri: RequestInfo, options?: RequestInit | undefined) => Promise<R>;

const createBrowserFetch = (app: ClientApplication<any>, errorHandler: (message: string, children?: ReactNode) => void): FetchInterface<object> => {
  return async (input: RequestInfo, init?: RequestInit): Promise<object> => {
    let response: Response;
    try {
      setInitDefaults(init);

      response = await authenticatedFetch(app)(input, init);

      const contentType: string | null = response.headers.get('Content-Type');
      const isJson = Boolean(contentType && contentType.startsWith('application/json'));

      if (response.status >= 200 && response.status < 300) {
        if (isJson) {
          return (await response.json()) as object;
        }

        const text: string = await response.text();

        return {data: text};
      }

      const responseData: {error?: {message?: string}} = (await response.json()) as {error?: {message?: string}};

      if (typeof responseData === 'object' && typeof responseData.error === 'object') {
        throw Error(responseData.error.message);
      }

      throw Error(responseData as string);
    } catch (e) {
      const errorMessage = 'Whoops!';
      let errorChildren;

      if (typeof e === 'string') {
        errorChildren = e;
      } else if (e instanceof Error && typeof e.message === 'string') {
        errorChildren = e.message;
      }

      errorHandler(errorMessage, errorChildren);

      return {error: {message: errorMessage}};
    }
  };
};

const setInitDefaults = (init?: RequestInit) => {
  init = init || {};

  // Setup headers
  let headers = init.headers;
  if (typeof headers === 'undefined') {
    headers = {};
  }
  // Take it from an `Object.entries()` style array into an assoc object
  if (Array.isArray(headers)) {
    headers = Object.fromEntries<string>(<Iterable<[string, string]>>headers);
  }
  // Just in case it's an object implementing `Headers` (a valid value of `init.headers`)
  if (headers instanceof Headers) {
    const headersMap: Record<string, string> = {};
    headers.forEach((value: string, key: string) => (headersMap[key] = value));

    headers = headersMap;
  }

  headers.accept = headers.accept || 'application/json';
  headers['content-type'] = headers['content-type'] || 'application/json';

  init.headers = headers;
  init.credentials = 'include';
};

export {createBrowserFetch};

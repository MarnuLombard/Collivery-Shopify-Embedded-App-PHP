import {authenticatedFetch} from "@shopify/app-bridge-utils";
import {ClientApplication} from "@shopify/app-bridge";

export type FetchInterface = (uri: RequestInfo, options?: RequestInit | undefined) => Promise<Response|null>;

const createBrowserFetch = (app: ClientApplication<any>, errorHandler: Function): FetchInterface => {

  return async (input: RequestInfo, init?: RequestInit) => {
    let response: Response;
    try {
      response = await authenticatedFetch(app)(input, init);

      // if (response.headers.get(REAUTH_HEADER) === '1') {
      //   const authUrlHeader = response.headers.get(REAUTH_URL_HEADER);
      //
      //   const redirect = Redirect.create(app);
      //   redirect.dispatch(Redirect.Action.APP, authUrlHeader || Routes.Auth);
      //
      //   return null;
      // }

      const contentType: string|null = response.headers.get('Content-Type');
      const isJson: boolean = typeof contentType == 'string'
        && contentType.startsWith('application/json');

      if (response.status >= 200 && response.status < 300) {
        return isJson ? await response.json() : await response.text();
      }

      const responseData: { error?: { message?: string } } | string = await response.json();

      if (typeof responseData === 'object' && typeof responseData.error === 'object') {
        throw Error(responseData.error.message);
      }

      throw Error(responseData as string);
    } catch (e) {
      const errorMessage: string = 'Whoops!';
      let errorChildren;

      if (typeof e === 'string') {
        errorChildren = e;
      } else if (e instanceof Error && typeof e.message === "string") {
        errorChildren = e.message;
      }

      errorHandler(errorMessage, errorChildren);
    }
  };
};


export {createBrowserFetch};

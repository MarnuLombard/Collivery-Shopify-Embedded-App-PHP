import React, {createContext, PropsWithChildren, ReactNode, useMemo, useState} from 'react';
import FeedbackBanners, {ActiveProps, AlertLevel, ChildrenProps, TextProps} from './FeedbackBanners';
import {createBrowserFetch, FetchInterface} from '../lib/Helpers/BrowserFetch';
import {ClientApplication} from '@shopify/app-bridge/client/types';

class MyContext {
  pluginHost!: string;
  triggerError!: (message: string, children?: ReactNode) => void;
  triggerSuccess!: (message: string, children?: ReactNode) => void;
  polarisApp!: ClientApplication<any>;
  browserFetch!: FetchInterface<any>;
}

const ColliveryContext = createContext(new MyContext());

type Props = {
  shopifyApiKey: string;
  shop: string;
  pluginHost: string;
};

const ColliveryProvider = (props: PropsWithChildren<Props>): JSX.Element => {
  const [state, setState] = useState<ActiveProps & TextProps & ChildrenProps>({
    criticalActive: false,
    criticalText: undefined,
    criticalChildren: undefined,
    successActive: false,
    successText: undefined,
    successChildren: undefined,
    warningActive: false,
    warningText: undefined,
    warningChildren: undefined,
  });

  const toggleBanner: (level: AlertLevel) => () => void = useMemo(
    () => (level: AlertLevel) => {
      const name = `${level}Active` as keyof ActiveProps;

      return () => {
        const currentState: boolean = state[name];
        setState({...state, [name]: !currentState});
      };
    },
    [state.successActive, state.warningActive, state.criticalActive]
  );

  const triggerError = (message: string, children?: ReactNode) => {
    setState({
      ...state,
      criticalActive: true,
      criticalText: message,
      criticalChildren: children,
    });
  };

  const triggerSuccess = (message: string, children?: ReactNode) => {
    setState({
      ...state,
      successActive: true,
      successText: message,
      successChildren: children,
    });
  };

  const triggerWarning = (message: string, children?: ReactNode) => {
    setState({
      ...state,
      warningActive: true,
      warningText: message,
      warningChildren: children,
    });
  };

  const {pluginHost} = props;
  const polarisApp = window.app;
  const browserFetch = createBrowserFetch(polarisApp, triggerError);

  polarisApp.subscribe('collivery', data => {
    console.log(data);
  });

  return (
    <div>
      <ColliveryContext.Provider
        value={{
          pluginHost,
          triggerError,
          triggerSuccess,
          polarisApp,
          browserFetch,
        }}
      >
        {props.children}
      </ColliveryContext.Provider>
      <FeedbackBanners toggleActive={toggleBanner} criticalActive={state.criticalActive} criticalText={state.criticalText} criticalChildren={state.criticalText} successActive={state.successActive} successText={state.successText} successChildren={state.successText} warningActive={state.warningActive} warningText={state.warningText} warningChildren={state.warningText}></FeedbackBanners>
    </div>
  );
};

export default ColliveryProvider;
export {ColliveryContext, MyContext};

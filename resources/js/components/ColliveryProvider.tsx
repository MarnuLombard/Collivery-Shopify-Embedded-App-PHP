import React from 'react';
import {Context} from '@shopify/app-bridge-react';
import FeedbackBanners from "./FeedbackBanners";
import {createApp} from "@shopify/app-bridge";
import {createBrowserFetch, FetchInterface} from "../lib/Helpers/BrowserFetch";
import {ClientApplication} from "@shopify/app-bridge/client/types";

class MyContext {
  pluginHost?: string;
  triggerError?: Function;
  triggerSuccess?: Function;
  polarisApp?: ClientApplication<any>;
  browserFetch?: FetchInterface;
};
const ColliveryContext = React.createContext(new MyContext());
type Props = {
  shopifyApiKey: string,
  shop: string,
  pluginHost: string,
}

class ColliveryProvider extends React.Component<Props> {
  static contextType = Context;

  state = {
    criticalActive: false,
    criticalText: undefined,
    criticalChildren: undefined,
    successActive: false,
    successText: undefined,
    successChildren: undefined,
    warningActive: false,
    warningText: undefined,
    warningChildren: undefined,
  }

  render() {
    const {pluginHost, shopifyApiKey, shop} = this.props;
    const polarisApp = createApp({apiKey: shopifyApiKey, host: btoa(shop), forceRedirect: true});
    const triggerSuccess = this.triggerSuccess.bind(this);
    const triggerError = this.triggerError.bind(this);
    const browserFetch = createBrowserFetch(this.context, triggerError);

    this.context.subscribe('collivery', data => {
      console.log(data)
    });

    return (
      <div>
        <ColliveryContext.Provider
          value={{
            pluginHost,
            triggerError,
            triggerSuccess,
            polarisApp,
            browserFetch
          }}>
          {this.props.children}
        </ColliveryContext.Provider>
        <FeedbackBanners
          toggleActive={this.toggleBanner.bind(this)}
          criticalActive={this.state.criticalActive}
          criticalText={this.state.criticalText}
          criticalChildren={this.state.criticalText}
          successActive={this.state.successActive}
          successText={this.state.successText}
          successChildren={this.state.successText}
          warningActive={this.state.warningActive}
          warningText={this.state.warningText}
          warningChildren={this.state.warningText}>
        </FeedbackBanners>
      </div>
    )
  }

  toggleBanner(level) {
    const name = `${level}Active`;
    return () => {
      const currentState = this.state[name];
      this.setState({[name]: !currentState});
    }
  }

  triggerError(message, children) {
    this.setState({
      criticalActive: true,
      criticalText: message,
      criticalChildren: children,
    })
  }

  triggerSuccess(message, children) {
    this.setState({
      successActive: true,
      successText: message,
      successChildren: children,
    })
  }

  triggerWarning(message, children) {
    this.setState({
      warningActive: true,
      warningText: message,
      warningChildren: children,
    })
  }
}

export default ColliveryProvider;
export {ColliveryContext}

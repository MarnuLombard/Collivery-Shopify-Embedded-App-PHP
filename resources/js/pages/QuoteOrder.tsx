import React, {Component} from 'react';
import route from '../lib/Helpers/Route';
import {ColliveryContext, MyContext} from '../components/ColliveryProvider';
import {QuoteCollection, QuoteResponseCollection} from '../types/Collivery/Quote';
import QuoteDisplay from '../components/QuoteDisplay';
import {Banner, Button, Card, Frame, Loading, TextContainer} from '@shopify/polaris';
import {FetchInterface} from '../lib/Helpers/BrowserFetch';
import {ResponseData} from '../types/Collivery/Responses';
import {Redirect} from '@shopify/app-bridge/actions';
import {Action} from '@shopify/app-bridge/actions/Navigation/Redirect';
import {ChevronDownMinor} from '@shopify/polaris-icons';
import Order = ShopifyPlugin.ShopifyApi.Models.Order;

type Props = {
  orderId: number;
};

type State = {
  quoteCollection?: QuoteCollection;
  order?: Order;
};

export default class QuoteOrder extends Component<Props, State> {
  static contextType = ColliveryContext;
  context!: MyContext;

  state = {
    quoteCollection: undefined,
    order: undefined,
  };

  render() {
    return (
      <Frame>
        {!this.props.orderId ? (
          <Card sectioned>
            <TextContainer>
              <Banner title="No order selected" action={{content: 'Choose order', onAction: this.redirectToOrders(0).bind(this)}} status="critical">
                <p>
                  Please select an order to create a waybill from. <br />
                  When viewing an order, select{' '}
                  <span style={{verticalAlign: 'middle'}}>
                    <Button outline disabled size="slim" icon={ChevronDownMinor} onClick={() => undefined}>
                      More actions
                    </Button>
                  </span>{' '}
                  menu item.
                </p>
              </Banner>
            </TextContainer>
          </Card>
        ) : !this.state.quoteCollection || !this.state.order ? (
          <Loading />
        ) : (
          <QuoteDisplay quoteCollection={this.state.quoteCollection} order={this.state.order} />
        )}
      </Frame>
    );
  }

  componentDidMount() {
    const {triggerError} = this.context;

    if (!this.props.orderId) {
      this.redirectToOrders(5000).bind(this)();
      return;
    }

    this.fetchOrder().catch((e: Error) => triggerError(e.message));
    this.fetchQuotes().catch((e: Error) => triggerError(e.message));
  }

  redirectToOrders(timeout = 0): () => void {
    return () => {
      setTimeout(() => {
        const redirect = Redirect.create(this.context.polarisApp);
        redirect.dispatch(Action.ADMIN_SECTION, {
          name: Redirect.ResourceType.Order,
        });
      }, timeout);
    };
  }

  async fetchOrder() {
    const browserFetch = this.context.browserFetch;

    await browserFetch(route('api.orders.show', {order: this.props.orderId})).then((response: ResponseData<Order, never>) => {
      if (!response) {
        return;
      }

      this.setState({order: response.data});
    });
  }

  async fetchQuotes() {
    const {browserFetch}: {browserFetch: FetchInterface<QuoteResponseCollection>} = this.context;

    await browserFetch(route('api.orders.quote', {order: this.props.orderId})).then((response: QuoteResponseCollection) => {
      if (!response) {
        return;
      }

      this.setState({quoteCollection: QuoteCollection.fromResponseCollection(response)});
      console.log(this.state.quoteCollection);
    });
  }
}

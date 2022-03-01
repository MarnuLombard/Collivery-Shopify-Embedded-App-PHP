import React, {useContext, useEffect, useState} from 'react';
import route from '../lib/Helpers/Route';
import {ColliveryContext, MyContext} from '../components/ColliveryProvider';
import {QuoteCollection, QuoteResponseCollection} from '../types/Collivery/Quote';
import QuoteDisplay from '../components/QuoteDisplay';
import {Banner, Button, Card, Frame, Loading, TextContainer} from '@shopify/polaris';
import {ResponseData} from '../types/Collivery/Responses';
import {Redirect} from '@shopify/app-bridge/actions';
import {Action} from '@shopify/app-bridge/actions/Navigation/Redirect';
import {ChevronDownMinor} from '@shopify/polaris-icons';
import {Order} from '../types/ShopifyPlugin/ShopifyApi/Models/Order';
import {useParams} from 'react-router-dom';

const QuoteOrder = (): JSX.Element => {
  const [quoteCollection, setQuoteCollection] = useState<QuoteCollection>();
  const [order, setOrder] = useState<Order>();
  const {browserFetch, triggerError, polarisApp} = useContext<MyContext>(ColliveryContext);
  const {id} = useParams<Record<string, string>>();

  const fetchQuotes = async (): Promise<void> => {
    await browserFetch(route('api.orders.quote', {order: id as string})).then((response: QuoteResponseCollection) => {
      if (!response) {
        return;
      }

      setQuoteCollection(QuoteCollection.fromResponseCollection(response));
      console.log(quoteCollection);
    });
  };

  const redirectToOrders = (timeout = 0): void => {
    useEffect(() => {
      const handle = setTimeout(() => {
        const redirect = Redirect.create(polarisApp);
        redirect.dispatch(Action.ADMIN_SECTION, {
          name: Redirect.ResourceType.Order,
        });

        return () => clearTimeout(handle);
      }, timeout);
    }, []);
  };

  const fetchOrder = async (): Promise<void> => {
    await browserFetch(route('api.orders.show', {order: id as string})).then((response: ResponseData<Order, never>) => {
      if (!response) {
        return;
      }

      setOrder(response.data);
    });
  };

  useEffect(() => {
    if (!id) {
      redirectToOrders(5000);
      return;
    }

    fetchOrder().catch((e: Error) => triggerError(e.message));
    fetchQuotes().catch((e: Error) => triggerError(e.message));
  }, []);

  return (
    <Frame>
      {!id ? (
        <Card sectioned>
          <TextContainer>
            <Banner title="No order selected" action={{content: 'Choose order', onAction: () => redirectToOrders(0)}} status="critical">
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
      ) : !quoteCollection || !order ? (
        <Loading />
      ) : (
        <QuoteDisplay quoteCollection={quoteCollection} order={order} />
      )}
    </Frame>
  );
};

export default QuoteOrder;

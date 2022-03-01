import {Card, ResourceList, Stack, TextStyle, Thumbnail} from '@shopify/polaris';
import React, {Component} from 'react';
import {Quote, QuoteCollection} from '../types/Collivery/Quote';
import route from '../lib/Helpers/Route';
import {Order} from '../types/ShopifyPlugin/ShopifyApi/Models/Order';

type Props = {
  quoteCollection: QuoteCollection;
  order: Order;
};

const QuoteDisplay = (props: Props): JSX.Element => {
  const {quotes, times} = props.quoteCollection;

  const handleOnClick = () => {
    // todo
  };

  return (
    <Card>
      <ResourceList
        showHeader={true}
        items={quotes}
        renderItem={(quote: Quote) => {
          const media = <Thumbnail source={'https://collivery.net/img/collivery-icon.svg'} alt={'Waybill'} size={'small'} />;
          const shortcutActions = [
            {
              content: `Book ${quote.serviceType.name} waybill.`,
              accessibilityLabel: `Book ${quote.serviceType.name} waybill.`,
              url: route('api.waybills.store'),
            },
          ];
          return (
            <ResourceList.Item id={quote.serviceType.code} accessibilityLabel={`View details for ${quote.serviceType.name}`} media={media} onClick={handleOnClick} shortcutActions={shortcutActions}>
              <Stack alignment="center">
                <Stack.Item fill>
                  <h3>
                    <TextStyle variation="strong">
                      {quote.serviceType.name}
                      {typeof times === 'undefined' ? null : times[quote.serviceType.id].collection_time}
                    </TextStyle>
                  </h3>
                </Stack.Item>
              </Stack>
            </ResourceList.Item>
          );
        }}
      />
    </Card>
  );
};

export default QuoteDisplay;

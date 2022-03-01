import {Card, ResourceList, Stack, TextStyle, Thumbnail} from '@shopify/polaris';
import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {ColliveryContext, MyContext} from './ColliveryProvider';
import route from '../lib/Helpers/Route';
import {ClientApplication} from '@shopify/app-bridge/client/types';
import {FetchInterface} from '../lib/Helpers/BrowserFetch';
import {ResponseCollection} from '../types/Collivery/Responses';
import {Waybill} from '../types/ShopifyPlugin/ColliveryApi/Models/Waybill';

type Props = {
  handleModalOpen: (waybillId: number) => void;
};
type State = {
  waybills: Waybill[];
  errorActive: boolean;
  errorText: null | string;
};

const ResourceListWithWaybills = (props: Props): JSX.Element => {
  const {polarisApp, browserFetch, triggerError} = useContext(ColliveryContext);
  const [waybills, setWaybills] = useState<Waybill[]>([]);
  const [errorActive, setErrorActive] = useState(false);
  const [errorText, setErrorText] = useState<string>();

  const makeDateTimeString = (timestamp: number): string => {
    return new Date(timestamp * 1000)
      .toLocaleString('en-ZA', {
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Africa/Johannesburg',
      })
      .replace(',', '');
  };

  const handleOnClick = (waybillId?: string) => {
    if (!waybillId) {
      return;
    }

    props.handleModalOpen(Number(waybillId));
  };

  useEffect(() => {
    const shop = polarisApp.localOrigin;
    browserFetch(route('api.waybills.index', {shop}))
      .then((response: {data: Waybill[]}) => {
        if (!response) {
          triggerError('error');

          return;
        }
        const waybills = response.data;
        setWaybills(waybills);
      })
      .catch(e => {
        let message: string;
        if (typeof e === 'string') {
          message = e;
        } else if (e instanceof Error) {
          message = e.message;
        } else {
          message = 'Whoops';
        }

        triggerError(message);
      });
  }, []);

  if (!waybills.length) {
    return <p>Loading....</p>;
  }

  return (
    <Card>
      <ResourceList
        showHeader
        resourceName={{singular: 'Waybill', plural: 'Waybills'}}
        items={waybills}
        renderItem={item => {
          const media = <Thumbnail source={'https://collivery.net/img/collivery-icon.svg'} alt={'Waybill'} size={'small'} />;
          return (
            <ResourceList.Item id={item.id.toString()} accessibilityLabel={`View details for ${item.id}`} media={media} onClick={handleOnClick}>
              <Stack alignment="center">
                <Stack.Item fill>
                  <h3>
                    <TextStyle variation="strong">{item.id}</TextStyle>
                  </h3>
                  {item.custom_id ? `(${item.custom_id})` : null}
                </Stack.Item>
                <Stack.Item>
                  <p>{item.status_name}</p>
                </Stack.Item>
                <Stack.Item>
                  <p>Collect after: {makeDateTimeString(item.collection_time)}</p>
                  <p>Deliver before: {makeDateTimeString(item.delivery_time)}</p>
                </Stack.Item>
              </Stack>
            </ResourceList.Item>
          );
        }}
      />
    </Card>
  );
};

export default ResourceListWithWaybills;

import {Layout, Page} from '@shopify/polaris';
import {TitleBar} from '@shopify/app-bridge-react';
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {ColliveryContext, MyContext} from '../components/ColliveryProvider';
import WaybillModal from '../components/WaybillModal';
import RunGraphQL from '../components/RunGraphQL';
import ResourceListWithWaybills from '../components/ResourceListWithWaybills';
import route from '../lib/Helpers/Route';
import {Waybill} from '../types/ShopifyPlugin/ColliveryApi/Models/Waybill';

const Home = (): JSX.Element => {
  const {browserFetch, triggerError} = useContext<MyContext>(ColliveryContext);

  const [waybillData, setWaybillData] = useState<Waybill | null>();
  const [selectedWaybill, setSelectedWaybill] = useState<number | null>();

  useEffect(() => {
    if (typeof selectedWaybill !== 'number') {
      return;
    }

    browserFetch(route('api.waybills.show', {id: selectedWaybill}))
      .then((response: {data: Waybill}) => setWaybillData(response.data))
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
  }, [selectedWaybill]);

  return waybillData ? (
    <Page>
      <TitleBar
        title="MDS Collivery.net Waybills"
        primaryAction={{
          content: 'Your active waybills',
        }}
      />
      <Layout>
        <WaybillModal open={selectedWaybill !== null} waybillData={waybillData} handleModalClose={() => setSelectedWaybill(null)} />

        <RunGraphQL />

        <ResourceListWithWaybills handleModalOpen={waybillId => setSelectedWaybill(waybillId)} />
      </Layout>
    </Page>
  ) : (
    <></>
  );
};

export default Home;

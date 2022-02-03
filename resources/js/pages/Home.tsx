import {Layout, Page} from '@shopify/polaris';
import {TitleBar} from '@shopify/app-bridge-react';
import * as React from 'react';
import {Component, ReactNode} from 'react';
import {ColliveryContext, MyContext} from '../components/ColliveryProvider';
import WaybillModal from '../components/WaybillModal';
import RunGraphQL from '../components/RunGraphQL';
import ResourceListWithWaybills from '../components/ResourceListWithWaybills';
import route from '../lib/Helpers/Route';
import {FetchInterface} from '../lib/Helpers/BrowserFetch';
import {ResponseData} from '../types/Collivery/Responses';
import Waybill = ShopifyPlugin.ColliveryApi.Models.Waybill;

type State = {
  selectedWaybill: number | null;
  waybillData?: Waybill;
};

class Home extends Component<never, State> {
  static contextType = ColliveryContext;
  context!: MyContext;

  state = {
    selectedWaybill: null,
    waybillData: undefined,
  };

  render() {
    if (!this.state.waybillData) {
      return;
    }

    const waybillData = this.state.waybillData;

    return (
      <Page>
        <TitleBar
          title="MDS Collivery.net Waybills"
          primaryAction={{
            content: 'Your active waybills',
          }}
        />
        <Layout>
          <WaybillModal open={this.state.selectedWaybill !== null} waybillData={waybillData} handleModalClose={this.handleWaybillModalClose.bind(this)} />

          <RunGraphQL />

          <ResourceListWithWaybills handleModalOpen={this.handleSetSelectedWaybill.bind(this)} />
        </Layout>
      </Page>
    );
  }

  handleSetSelectedWaybill(waybillId: number) {
    this.setState({selectedWaybill: waybillId});
    const {
      browserFetch,
      triggerError,
    }: {
      browserFetch: FetchInterface<ResponseData<Waybill, never>>;
      triggerError: (message: string, children?: ReactNode) => void;
    } = this.context;

    browserFetch(route('api.waybills.show', {id: waybillId}))
      .then(response => {
        this.setState({waybillData: response.data});
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
  }

  handleWaybillModalClose() {
    this.setState({selectedWaybill: null});
  }
}

export default Home;

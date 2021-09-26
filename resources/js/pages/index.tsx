import {Layout, Page} from '@shopify/polaris';
import {TitleBar} from '@shopify/app-bridge-react';
import * as React from 'react';
import {Component} from 'react';
import {ColliveryContext} from '../components/ColliveryProvider';
import WaybillModal from '../components/WaybillModal';
import RunGraphQL from '../components/RunGraphQL';
import ResourceListWithWaybills from '../components/ResourceListWithWaybills';
import urlCat from 'urlcat';
import {Waybill} from "../types/Collivery/Waybill";

type State = {
  selectedWaybill: number|null,
  waybillData: Object|Waybill,
}

class Index extends Component<never, State> {
  static contextType = ColliveryContext;

  state = {
    selectedWaybill: null,
    waybillData: {},
  }

  render() {
    const waybillData = this.state.waybillData as Waybill;

    return (
      <Page>
        <TitleBar
          title="MDS Collivery.net Waybills"
          primaryAction={{
            content: 'Your active waybills',
          }}
        />
        <Layout>
          <WaybillModal
            open={this.state.selectedWaybill !== null}
            waybillData={waybillData}
            handleModalClose={this.handleWaybillModalClose.bind(this)}/>

          <RunGraphQL/>

          <ResourceListWithWaybills handleModalOpen={this.handleSetSelectedWaybill.bind(this)}/>
        </Layout>
      </Page>
    );
  }

  handleSetSelectedWaybill(waybillId) {
    this.setState({selectedWaybill: waybillId});
    const {host, routes, browserFetch, polarisApp} = this.context;
    const shop = polarisApp.localOrigin;
    const url = urlCat(host, `${routes.WaybillsShow}?shop=:shop`, {shop, id: waybillId});
    browserFetch(url, {headers: {accept: 'application/json'}, credentials: 'include'})
      .then(response => {
        const waybillData = response.data;
        console.log(waybillData);
        this.setState({waybillData});
      });
  }

  handleWaybillModalClose() {
    this.setState({selectedWaybill: null});
  }
}

export default Index;


import {Card, ResourceList, Stack, TextStyle, Thumbnail} from '@shopify/polaris';
import React from 'react';
import {ColliveryContext} from './ColliveryProvider';
import route from "../lib/Helpers/Route";
import {Waybill} from "../types/Collivery/Waybill";
import {StatusName} from "../types/Collivery/Status";

type StatusTracking = {
  status_id: number,
  status_name: StatusName,
  waybill_id: number,
  created_at: string, // "YYYY-MM-DD HH:mm:ss"
};
type Props = { handleModalOpen: Function };
type State = {
  waybills: StatusTracking[],
  errorActive: boolean,
  errorText: null|string,
};

class ResourceListWithWaybills extends React.Component<Props, State> {
  state = {
    waybills: [],
    errorActive: false,
    errorText: null,
  }

  static contextType = ColliveryContext;

  render() {
    const waybills = this.state.waybills as StatusTracking[];
    return (
      !waybills.length ?
        <p>Loading....</p> :
        <Card>
          <ResourceList
            showHeader
            resourceName={{singular: 'Waybill', plural: 'Waybills'}}
            items={waybills}
            renderItem={
              item => {
                const media =
                  <Thumbnail source={"https://collivery.net/img/collivery-icon.svg"} alt={"Waybill"} size={"small"}/>;
                return (
                  <ResourceList.Item
                    id={item.waybill_id.toString()}
                    accessibilityLabel={`View details for ${item.waybill_id}`}
                    media={media}
                    onClick={this.handleOnClick.bind(this)}
                  >
                    <Stack>
                      <Stack.Item fill>
                        <h3>
                          <TextStyle variation="strong">
                            {item.waybill_id}
                          </TextStyle>
                        </h3>
                      </Stack.Item>
                      <Stack.Item>
                        <p>{item.status_name}</p>
                      </Stack.Item>
                      <Stack.Item>
                        <p>Last updated: {item.created_at}</p>
                      </Stack.Item>
                    </Stack>
                  </ResourceList.Item>
                );
              }
            }/>
        </Card>
    );
  }

  componentDidMount() {
    const {polarisApp, browserFetch} = this.context;
    const shop = polarisApp.localOrigin;
    const url = route('waybills.index', {shop});
    browserFetch(url, {headers: {accept: 'application/json'}, credentials: 'include'})
      .then(response => {
        if (!response) {
          return this.context.triggerError("error");
        }
        const waybills = response.data;
        this.setState({waybills});
      });
  }

  handleOnClick = (waybillId) => {
    this.props.handleModalOpen(waybillId);
  };
}

export default ResourceListWithWaybills;

import {Card, ResourceList, Stack, TextStyle, Thumbnail} from '@shopify/polaris';
import React from 'react';
import {ColliveryContext} from './ColliveryProvider';
import route from "../lib/Helpers/Route";
import {Waybill} from "../types/Collivery/Waybill";

type Props = { handleModalOpen: Function };
type State = {
  waybills: Waybill[],
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
    const waybills = this.state.waybills;
    return (
      !waybills.length ?
        <p>Loading....</p> :
        <Card>
          <ResourceList
            showHeader
            resourceName={{singular: 'Waybill', plural: 'Waybills'}}
            items={waybills as Waybill[]}
            renderItem={
              item => {
                const media =
                  <Thumbnail source={"https://collivery.net/img/collivery-icon.svg"} alt={"Waybill"} size={"small"}/>;
                return (
                  <ResourceList.Item
                    id={item.id.toString()}
                    accessibilityLabel={`View details for ${item.id}`}
                    media={media}
                    onClick={this.handleOnClick.bind(this)}
                  >
                    <Stack alignment="center">
                      <Stack.Item fill>
                        <h3>
                          <TextStyle variation="strong">
                            {item.id}
                          </TextStyle>
                        </h3>
                        {item.custom_id ? `(${item.custom_id})` : null}
                      </Stack.Item>
                      <Stack.Item>
                        <p>{item.status_name}</p>
                      </Stack.Item>
                      <Stack.Item>
                        <p>Collect after: {this.makeDateTimeString(item.collection_time)}</p>
                        <p>Deliver before: {this.makeDateTimeString(item.delivery_time)}</p>
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
    browserFetch(route('waybills.index', {shop}))
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

  makeDateTimeString(timestamp: number): string {
    return new Date(timestamp * 1000)
        .toLocaleString('en-ZA', {
          weekday: "short",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: 'Africa/Johannesburg',
        }).replace(',', '');
  }
}

export default ResourceListWithWaybills;

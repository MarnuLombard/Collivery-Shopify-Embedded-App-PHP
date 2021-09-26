import React from 'react';
import {DescriptionList, Modal, TextContainer} from '@shopify/polaris';
import {Waybill} from "../types/Collivery/Waybill";

type Props = {
  waybillData: Waybill,
}

class WaybillModalDetails extends React.Component<Props> {
  render() {
    const {
      weight,
      volumetric_weight,
      delivery_address,
      parcel_count,
      service_type_name,
      status_name,
      total_price,
    } = this.props.waybillData as Waybill;

    return <Modal.Section>
      <TextContainer>

        <DescriptionList
          items={[
            {
              term: 'Collect after',
              description: this.collectionDateTime,
            },
            {
              term: 'Deliver before',
              description: this.deliveryDateTime,
            },
            {
              term: 'Custom info',
              description: this.customInfo,
            },
            {
              term: 'Delivery address',
              description: delivery_address ? delivery_address.text : '',
            },
            {
              term: 'Parcels',
              description: parcel_count,
            },
            {
              term: 'Service type',
              description: service_type_name,
            },
            {
              term: 'Status',
              description: status_name,
            },
            {
              term: 'Total price',
              description: `R ${total_price}`,
            },
            {
              term: 'Weight',
              description: `${weight}kg (Volumetric: ${volumetric_weight}kg)`
            },
          ]}
        />
      </TextContainer>
    </Modal.Section>;
  }


  get collectionDateTime() {
    const data = this.props.waybillData;
    const collectionTime = new Date(Number(`${data.collection_time}000`));

    return `${collectionTime.toLocaleDateString('en-za')} ${collectionTime.toLocaleTimeString('en-za').substring(0, 5)}`;
  }

  get deliveryDateTime() {
    const data = this.props.waybillData;
    const deliveryTime = new Date(Number(`${data.delivery_time}000`));

    return `${deliveryTime.toLocaleDateString('en-za')} ${deliveryTime.toLocaleTimeString('en-za').substring(0, 5)}`;
  }

  get customInfo() {
    const data = this.props.waybillData;
    let info: string[] = [];

    if (data.custom_id) {
      info.push(`ID: ${data.custom_id}`);
    }
    if (data.special_instructions) {
      info.push(`Instructions: ${data.special_instructions}`);
    }
    if (data.customer_reference) {
      info.push(`Reference: ${data.customer_reference}`);
    }

    return info.join(', ');
  }
}


export default WaybillModalDetails;

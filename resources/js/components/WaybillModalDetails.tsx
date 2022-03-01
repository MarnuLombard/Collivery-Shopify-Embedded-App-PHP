import React from 'react';
import {DescriptionList, Modal, TextContainer} from '@shopify/polaris';
import {Waybill} from '../types/ShopifyPlugin/ColliveryApi/Models/Waybill';

type Props = {
  waybillData: Waybill;
};

const WaybillModalDetails = (props: Props): JSX.Element => {
  const {waybillData} = props;

  const customInfo = (() => {
    const data = waybillData;
    const info: string[] = [];

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
  })();

  const collectionDateTime = (() => {
    const data = waybillData;
    const collectionTime = new Date(Number(`${data.collection_time}000`));

    return `${collectionTime.toLocaleDateString('en-za')} ${collectionTime.toLocaleTimeString('en-za').substring(0, 5)}`;
  })();

  const deliveryDateTime = (() => {
    const data = waybillData;
    const deliveryTime = new Date(Number(`${data.delivery_time}000`));

    return `${deliveryTime.toLocaleDateString('en-za')} ${deliveryTime.toLocaleTimeString('en-za').substring(0, 5)}`;
  })();

  return (
    <Modal.Section>
      <TextContainer>
        <DescriptionList
          items={[
            {
              term: 'Collect after',
              description: collectionDateTime,
            },
            {
              term: 'Deliver before',
              description: deliveryDateTime,
            },
            {
              term: 'Custom info',
              description: customInfo,
            },
            {
              term: 'Collection address',
              description: waybillData.collection_address ? waybillData.collection_address.text : '',
            },
            {
              term: 'Delivery address',
              description: waybillData.delivery_address ? waybillData.delivery_address.text : '',
            },
            {
              term: 'Parcels',
              description: waybillData.parcel_count,
            },
            {
              term: 'Service type',
              description: waybillData.service_type_name,
            },
            {
              term: 'Status',
              description: waybillData.status_name,
            },
            {
              term: 'Total price',
              description: `R ${waybillData.total_price}`,
            },
            {
              term: 'Weight',
              description: `${waybillData.weight}kg (Volumetric: ${waybillData.volumetric_weight}kg)`,
            },
          ]}
        />
      </TextContainer>
    </Modal.Section>
  );
};

export default WaybillModalDetails;

import {DescriptionList, Modal, TextContainer} from '@shopify/polaris';
import React from 'react';
import {ColliveryContext} from './ColliveryProvider';
import {Waybill} from "../types/Collivery/Waybill";
import {ComplexAction} from "@shopify/polaris/dist/types/latest/src/types";
import route from "../lib/Helpers/Route";
import {NoteMajor} from '@shopify/polaris-icons';

type Props = {
  open: boolean,
  waybillData: Waybill,
  handleModalClose: Function,
}

class WaybillDetailsModal extends React.Component<Props> {
  static contextType = ColliveryContext;

  render() {
    const {open, waybillData} = this.props;

    if (!waybillData.hasOwnProperty('weight')) {
      return (null);
    }

    const {
      weight,
      volumetric_weight,
      delivery_address,
      parcel_count,
      service_type_name,
      id,
      status_name,
      total_price,
    } = waybillData as Waybill;
    return (
      <Modal
        open={open}
        onClose={this.handleOnClose.bind(this)}
        title={`Waybill ${id}`}
        secondaryActions={this.actions}
      >
        <Modal.Section>
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
        </Modal.Section>
      </Modal>
    );
  }

  handleOnClose() {
    this.props.handleModalClose();
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

  get actions(): ComplexAction[] {
    const waybill: Waybill = this.props.waybillData;
    const {browserFetch, triggerError} = this.context;
    return [{
      onAction() {
        browserFetch(route('waybills.pdf.download', {waybill: waybill.id}))
          .then(response => {
            if (!response) {
              return triggerError('Could not get PDF.');
            }
          });
      },
      content: 'View Waybill',
      icon: NoteMajor,
    }];
  }
}

export default WaybillDetailsModal;

import {Modal} from '@shopify/polaris';
import React from 'react';
import {ColliveryContext} from './ColliveryProvider';
import {Waybill} from "../types/Collivery/Waybill";
import {ComplexAction} from "@shopify/polaris/dist/types/latest/src/types";
import route from "../lib/Helpers/Route";
import {NoteMajor} from '@shopify/polaris-icons';
import WaybillModalDetails from "./WaybillModalDetails";
import WaybillModalImage from "./WaybillModalImage";

type Props = {
  open: boolean,
  waybillData: Waybill,
  handleModalClose: Function,
}

type State = {
  waybillImage: string|null,
  imageVisible: boolean,
}

class WaybillModal extends React.Component<Props, State> {
  static contextType = ColliveryContext;

  state = {
    waybillImage: null,
    imageVisible: false,
  }

  render() {
    const {open, waybillData} = this.props;
    const {waybillImage, imageVisible} = this.state;

    if (!waybillData.hasOwnProperty('weight')) {
      return (null);
    }

    const {id} = waybillData as Waybill;
    return (
      <Modal
        open={open}
        onClose={this.handleOnClose.bind(this)}
        title={`Waybill ${id}`}
        secondaryActions={this.actions}>
        {
          imageVisible
            ? <WaybillModalImage handleClose={this.handleImageClose.bind(this)} waybillImage={waybillImage} waybillData={waybillData}/>
            : <WaybillModalDetails waybillData={waybillData}/>
        }
      </Modal>
    );
  }

  handleOnClose() {
    this.props.handleModalClose();
  }

  handleImageClose() {
    this.setState({
      imageVisible: false,
    })
  }

  get actions(): ComplexAction[] {
    const waybill: Waybill = this.props.waybillData;
    const {browserFetch, triggerError} = this.context;
    const setState = this.setState.bind(this);
    return [{
      onAction() {
        browserFetch(route('waybills.image.show', {waybill: waybill.id}))
          .then(response => {
            if (!response) {
              return triggerError('Could not get waybill image.');
            }

            setState({
              waybillImage: response.data.image,
              imageVisible: true,
            });
          });
      },
      content: 'View Waybill',
      icon: NoteMajor,
    }];
  }
}

export default WaybillModal;

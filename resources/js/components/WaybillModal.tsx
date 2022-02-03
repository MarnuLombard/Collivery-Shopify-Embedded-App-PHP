import {Modal} from '@shopify/polaris';
import React, {ReactNode} from 'react';
import {ColliveryContext, MyContext} from './ColliveryProvider';
import {Waybill} from '../types/Collivery/Waybill';
import {ComplexAction} from '@shopify/polaris/build/ts/latest/src/types';
import route from '../lib/Helpers/Route';
import {NoteMajor} from '@shopify/polaris-icons';
import WaybillModalDetails from './WaybillModalDetails';
import WaybillModalImage from './WaybillModalImage';
import {FetchInterface} from '../lib/Helpers/BrowserFetch';
import {ResponseData} from '../types/Collivery/ResponseCollection';

type Props = {
  open: boolean;
  waybillData: Waybill;
  handleModalClose: () => void;
};

type State = {
  waybillImage: string | null;
  imageVisible: boolean;
};

class WaybillModal extends React.Component<Props, State> {
  static contextType = ColliveryContext;
  context!: MyContext;

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
    const {
      browserFetch,
      triggerError,
    }: {
      browserFetch: FetchInterface<ResponseData<{image: string}, never>>;
      triggerError: (message: string, children?: ReactNode) => void;
    } = this.context;
    const setState = this.setState.bind(this);
    return [
      {
        onAction() {
          browserFetch(route('api.waybills.image.show', {waybill: waybill.id}))
            .then(response => {
              if (!response) {
                return triggerError('Could not get waybill image.');
              }

              setState({
                waybillImage: response.data.image,
                imageVisible: true,
              });
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
        },
        content: 'View Waybill',
        icon: NoteMajor,
      },
    ];
  }

  handleOnClose() {
    this.props.handleModalClose();
  }

  handleImageClose() {
    this.setState({
      imageVisible: false,
    });
  }

  render() {
    const {open, waybillData} = this.props;
    const {waybillImage, imageVisible} = this.state;

    if (!waybillData.weight) {
      return null;
    }

    const {id} = waybillData;
    return (
      <Modal open={open} onClose={this.handleOnClose.bind(this)} title={`Waybill ${id}`} secondaryActions={this.actions}>
        {imageVisible ? <WaybillModalImage handleClose={this.handleImageClose.bind(this)} waybillImage={waybillImage} waybillData={waybillData} /> : <WaybillModalDetails waybillData={waybillData} />}
      </Modal>
    );
  }
}

export default WaybillModal;

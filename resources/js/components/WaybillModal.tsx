import {Modal} from '@shopify/polaris';
import React, {useContext, useEffect, useState} from 'react';
import {ColliveryContext} from './ColliveryProvider';
import route from '../lib/Helpers/Route';
import {NoteMajor} from '@shopify/polaris-icons';
import WaybillModalDetails from './WaybillModalDetails';
import WaybillModalImage from './WaybillModalImage';
import {Waybill} from '../types/ShopifyPlugin/ColliveryApi/Models/Waybill';

type Props = {
  open: boolean;
  waybillData: Waybill;
  handleModalClose: () => void;
};

const WaybillModal = (props: Props): JSX.Element => {
  const [waybillImage, setWaybillImage] = useState<string | null>();
  const [imageVisible, setImageVisible] = useState<boolean>();

  const waybill: Waybill = props.waybillData;
  const {browserFetch, triggerError} = useContext(ColliveryContext);

  const getWaybillImage: () => void = () => {
    return useEffect(() => {
      browserFetch(route('api.waybills.image.show', {waybill: waybill.id}))
        .then(response => {
          if (!response) {
            return triggerError('Could not get waybill image.');
          }
          setWaybillImage(response.data.image);
          setImageVisible(true);
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
    }, [waybill.id]);
  };

  if (!props.waybillData.weight) {
    return null;
  }

  const {id} = props.waybillData;
  return (
    <Modal
      open={props.open}
      onClose={props.handleModalClose}
      title={`Waybill ${id}`}
      secondaryActions={[
        {
          onAction: getWaybillImage,
          content: 'View Waybill',
          icon: NoteMajor,
        },
      ]}
    >
      {imageVisible ? <WaybillModalImage handleClose={() => setImageVisible(false)} waybillImage={waybillImage} waybillData={props.waybillData} /> : <WaybillModalDetails waybillData={props.waybillData} />}
    </Modal>
  );
};

export default WaybillModal;

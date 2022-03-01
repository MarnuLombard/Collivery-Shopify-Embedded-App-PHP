import React, {PropsWithChildren} from 'react';
import {Card} from '@shopify/polaris';
import {Waybill} from '../types/ShopifyPlugin/ColliveryApi/Models/Waybill';

type Props = {
  waybillImage: void | string;
  waybillData: Waybill;
  handleClose: () => void;
};

const WaybillModalImage = (props: PropsWithChildren<Props>): JSX.Element => {
  if (!props.waybillImage) {
    return <></>;
  }

  const imageBase64 = props.waybillImage;
  const close = props.handleClose;
  return (
    <Card
      sectioned
      title={props.waybillData.id}
      actions={[
        {
          content: 'close',
          onAction: close,
        },
      ]}
    >
      <img
        style={{
          width: '100%',
          height: 'auto',
        }}
        src={`data:image/jpeg;base64,${imageBase64}`}
      />
    </Card>
  );
};

export default WaybillModalImage;

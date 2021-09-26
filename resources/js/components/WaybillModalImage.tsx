import {Card} from "@shopify/polaris";
import React from "react";
import {Waybill} from "../types/Collivery/Waybill";

type Props = {
  waybillImage: null|string,
  waybillData: Waybill,
  handleClose: () => void,
}

class WaybillModalImage extends React.Component<Props> {
  render() {
    if (!this.props.waybillImage) {
      return (null);
    }

    const imageBase64: string = this.props.waybillImage;
    const close = this.props.handleClose;
    return (
        <Card sectioned title={this.props.waybillData.id} actions={[{
          content: 'close',
          onAction: close,
        }]}>
          <img style={{
            width: '100%',
            height: 'auto',
          }} src={`data:image/jpeg;base64,${imageBase64}`}/>
        </Card>
    );
  }
}

export default WaybillModalImage;

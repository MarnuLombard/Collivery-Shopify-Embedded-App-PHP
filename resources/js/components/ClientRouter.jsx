import {ClientRouter as AppBridgeClientRouter} from '@shopify/app-bridge-react';
import React from 'react';

function ClientRouter(props) {
  const {router} = props;

  return <AppBridgeClientRouter history={router} />;
}


export default ClientRouter;

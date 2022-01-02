import React from 'react';
import {RouterProps, withRouter} from 'react-router-dom';
import {ClientRouter} from '@shopify/app-bridge-react';

const Router: React.FC<RouterProps>  = (props: RouterProps): JSX.Element => {
  const {history} = props;

  return <ClientRouter history={history}/>;
};

export default withRouter(Router);

import React from "react";
import {Banner, Link} from "@shopify/polaris";

type Props = {
  current: string,
}

const NotFound: React.FC<Props> = (props): JSX.Element => {
  const goBack = () => window.history.back();

  return (
    <Banner
      title="Page not found"
      action={{
        content: 'Go back',
        onAction: goBack
      }}
      status="critical"
    >
      <p>
        The page {props.current} could not be found. You can <Link onClick={goBack}>retrace your steps here</Link>.
      </p>
      {props.children}
    </Banner>
  );
}

export default NotFound;

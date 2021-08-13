import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent = ({ inverted = true, content = 'loading...' }) => {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content={content} />
    </Dimmer>
  );
};

// into EventDashboard
export default LoadingComponent;

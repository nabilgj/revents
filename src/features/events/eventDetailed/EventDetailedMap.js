import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import GoogleMapReact from 'google-map-react';

const Marker = () => {
  return <Icon name="marker" size="big" color="red" />;
};

const EventDetailedMap = ({ latLng }) => {
  const zoom = 14;

  return (
    <Segment attached="bottom" style={{ padding: 0 }}>
      <div style={{ height: 300, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB2sW5VniFuXI-6ivkR0SP6MEIg9yJY_1c' }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={latLng.lat} lng={latLng.lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

// into EventDetailedInfo
export default EventDetailedMap;

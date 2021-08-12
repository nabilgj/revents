import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [location, setLocation] = useState(defaultProps);

  const handleSetLocation = (latLng) => {
    setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  };
  return (
    <>
      <h1>Testing 123</h1>
      <h3>Data is: {data} </h3>

      <Button
        content="Increment"
        color="green"
        onClick={() => dispatch(increment(12))}
      />

      <Button
        content="decrement"
        color="red"
        onClick={() => dispatch(decrement(10))}
      />

      <Button
        content="Open modal"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />

      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
};

// into App
export default Sandbox;

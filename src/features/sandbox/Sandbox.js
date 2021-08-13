import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

const Sandbox = () => {
  const [targetName, setTargetName] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);

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
        name="increment"
        loading={loading && targetName === 'increment'}
        content="Increment"
        color="green"
        onClick={(e) => {
          dispatch(increment(12));
          setTargetName(e.target.name);
        }}
      />

      <Button
        name="decrement"
        loading={loading && targetName === 'decrement'}
        content="decrement"
        color="red"
        onClick={(e) => {
          dispatch(decrement(12));
          setTargetName(e.target.name);
        }}
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

import React from 'react';

import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

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
    </>
  );
};

// into App
export default Sandbox;

import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../auth/authActions';
import { useSelector } from 'react-redux';

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser.photoUrl || '/assets/user.png'}
      />

      <Dropdown pointing="top left" text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />

          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push('/');
            }}
            text="Sign out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

// into Nav
export default SignedInMenu;

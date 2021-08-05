import React, { useState } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

import { NavLink, useHistory } from 'react-router-dom';

import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [atuhenticated, setAuthenticated] = useState(false);

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '16px' }}
          />
          Re-vents
        </Menu.Item>

        <Menu.Item name="Events" as={NavLink} to="/events" />

        {atuhenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Events" />
          </Menu.Item>
        )}

        {atuhenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

// into App
export default NavBar;

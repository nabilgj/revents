import React from 'react';

import NavBar from '../../features/nav/NavBar';

import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router-dom';

import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';

function App() {
  const { key } = useLocation();

  return (
    <>
      <Route path="/" component={HomePage} exact />

      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />

            <Container className="main">
              <Route path="/events" component={EventDashboard} exact />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/sandbox" component={Sandbox} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;

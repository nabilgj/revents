import React from 'react';

import NavBar from '../../features/nav/NavBar';

import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {
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
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;

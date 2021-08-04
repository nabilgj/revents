import React, { useState } from 'react';

import NavBar from '../../features/nav/NavBar';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';

import { Container } from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // into NavBar to open form on click CreateEvents
  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  // into EventDashboard to pass to EventList to be used inside EventListItem onButton click
  const handleSelectEvent = (event) => {
    setSelectedEvent(event); // here e is the object from form fields
    setFormOpen(true);
  };

  return (
    <>
      {/* <h1> Re-vents </h1> */}

      <NavBar setFormOpen={handleCreateFormOpen} />

      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}

export default App;

import React, { useState } from 'react';

import { Grid } from 'semantic-ui-react';
import EventList from './EventList';

import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  // into EventForm to create event
  // const handleCreateEvents = (e) => {
  //   console.log('from dashboar', e);
  //   setEvents([...events, e]);
  // };

  // // into EventForm to update event
  // const handleUpdatedEvents = (updatedEvent) => {
  //   setEvents(
  //     events.map((event) =>
  //       event.id === updatedEvent.id ? updatedEvent : event
  //     )
  //   );
  // };

  // into EventList to deete event
  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={handleDeleteEvent} />
        </Grid.Column>

        <Grid.Column width={6}>
          <h2>Event Filters</h2>
        </Grid.Column>
      </Grid>
    </div>
  );
};

// into App
export default EventDashboard;

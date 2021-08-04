import React, { useState } from 'react';

import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';

import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData);

  // into EventForm to create event
  const handleCreateEvents = (e) => {
    console.log('from dashboar', e);
    setEvents([...events, e]);
  };

  // into EventForm to update event
  const handleUpdatedEvents = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );

    selectEvent(null);
  };

  // into EventList to deete event
  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={selectEvent}
            deleteEvent={handleDeleteEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : null}
              setFormOpen={setFormOpen}
              setEvents={setEvents}
              selectedEvent={selectedEvent}
              createEvent={handleCreateEvents}
              updateEvent={handleUpdatedEvents}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

// into App
export default EventDashboard;

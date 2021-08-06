import React from 'react';

import { Grid } from 'semantic-ui-react';
import EventList from './EventList';

import { useSelector } from 'react-redux';

const EventDashboard = () => {
  // here { events } coming from initialState events prop name
  // and state.event coming from reducer slice name from rootReducer
  const { events } = useSelector((state) => state.event);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
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

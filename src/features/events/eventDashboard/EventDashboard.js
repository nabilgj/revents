import React from 'react';

import { Grid } from 'semantic-ui-react';
import EventList from './EventList';

import { useSelector } from 'react-redux';

import EventListItemPlaceholder from './EventListItemPlaceHolder';
import EventFilters from './EventFilters';

const EventDashboard = () => {
  // here { events } coming from initialState events prop name
  // and state.event coming from reducer slice name from rootReducer
  const { events } = useSelector((state) => state.event);

  const { loading } = useSelector((state) => state.async);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          {loading && (
            <>
              <EventListItemPlaceholder />
              <EventListItemPlaceholder />
            </>
          )}
          <EventList events={events} />
        </Grid.Column>

        <Grid.Column width={6}>
          <EventFilters />
        </Grid.Column>
      </Grid>
    </div>
  );
};

// into App
export default EventDashboard;

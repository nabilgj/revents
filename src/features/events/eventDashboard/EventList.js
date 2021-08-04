import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events, selectEvent, deleteEvent }) => {
  return (
    <div>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </div>
  );
};

// into EventDashboard
export default EventList;

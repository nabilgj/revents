import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteEvent } from '../EventActions';

import { format } from 'date-fns';

const EventListItem = ({ event }) => {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />

            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock" /> {format(event.date, 'MMMM d, yyyy h:mm a')}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div> {event.description} </div>

        <Button
          color="red"
          floated="right"
          content="delete"
          onClick={() => dispatch(deleteEvent(event.id))}
        />

        <Button
          color="teal"
          floated="right"
          content="view"
          as={Link}
          to={`/events/${event.id}`}
        />
      </Segment>
    </Segment.Group>
  );
};

// into EventList
export default EventListItem;

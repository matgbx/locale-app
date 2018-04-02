import React from 'react';
import EventComp from './EventComp';

const EventList = ((props) => {
  return (
    <div className="eventList">
      {
        props.events.map(event => <EventComp eventData={event} />)
      }
    </div>);
});

module.exports = EventList;

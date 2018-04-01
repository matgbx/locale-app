import React from 'react';
import EventComp from './EventComp';

const EventList = ((props) => {
  console.log(props.events);
  return (
    <div>
      {
        props.events.map(event => <EventComp eventData={event} />)
      }
    </div>);
});

module.exports = EventList;

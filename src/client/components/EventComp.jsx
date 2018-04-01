import React from 'react';

const EventComp = (props) => {
  console.log('event data title ===>', props.eventData);
  return (
    <div>
      <h3 className="eventType">{props.eventData.title}</h3>
      <h5>{props.eventData.time}</h5>
      <p>{props.eventData.description}</p>
    </div>
  )
};

module.exports = EventComp;

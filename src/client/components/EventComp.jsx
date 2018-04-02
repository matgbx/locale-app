import React from 'react';

const EventComp = (props) => {
  return (
    <div className="event">
      <div className="type">{props.eventData.title}</div>
      <div className="time">{props.eventData.time}</div>
      <p className="description">{props.eventData.description}</p>
    </div>
  );
};

module.exports = EventComp;

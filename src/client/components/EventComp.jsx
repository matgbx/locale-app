import React from 'react';
// import PropTypes from 'prop-types';

const EventComp = props => (
  <div className="event">
    <div className="type">{props.eventData.title}</div>
    <div className="time">{props.eventData.time}</div>
    <p className="description">{props.eventData.description}</p>
  </div>
);

// EventComp.propTypes = {
//   eventData: PropTypes.objectOf(PropTypes.string).isRequired,
// };

module.exports = EventComp;

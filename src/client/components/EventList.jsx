import React from 'react';
import keyIndex from 'react-key-index';
// import PropTypes from 'prop-types';
import EventComp from './EventComp';

const EventList = (props) => {
  const listWithKeys = keyIndex(props.events, 1);
  return (
    <div className="eventList">
      {
        listWithKeys.map(event => <EventComp eventData={event} key={event._titleId} />)
      }
    </div>
  );
};

// EventList.propTypes = {
//   events: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

module.exports = EventList;

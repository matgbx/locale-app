import React from 'react';
// import PropTypes from 'prop-types';

const MapMarker = props => (
  <div
    role="button"
    tabIndex={props.index}
    className="marker"
    value={props.value}
    onClick={() => { props.markerClick(props.value); }}
    onKeyDown={() => {}}
  />
);

// MapMarker.propTypes = {
//   value: PropTypes.number.isRequired,
//   markerClick: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
// };

export default MapMarker;

import React from 'react';

const MapMarker = (props => (
  <div 
    className="marker" 
    value={props.value} 
    onClick={() => {props.markerClick(props.value)}}
  />));

export default MapMarker;

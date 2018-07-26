import React from 'react';
import GoogleMapReact from 'google-map-react';
import keyIndex from 'react-key-index';
// import PropTypes from 'prop-types';
import MapMarker from './MapMarker';

const MapView = (props) => {
  const listWithKeys = keyIndex(props.eventList, 1);
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCp2Tgf8U3lVzEOAAFBp4q6X2zvpjg5wZY' }}
        center={props.center}
        defaultZoom={15}
      >
        {
          listWithKeys.map((event, i) => (
            <MapMarker
              key={event._titleId}
              lat={event.location.latitude}
              lng={event.location.longitude}
              value={props.zipCode}
              index={i}
              markerClick={props.markerClick}
            />
          ))
        }
      </GoogleMapReact>
    </div>
  );
};

// MapView.propTypes = {
//   zipCode: PropTypes.string.isRequired,
//   eventList: PropTypes.arrayOf(PropTypes.object).isRequired,
//   center: PropTypes.arrayOf(PropTypes.number).isRequired,
//   markerClick: PropTypes.func.isRequired,
// };

export default MapView;

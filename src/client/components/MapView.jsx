import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

const MapView = (props) => {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCp2Tgf8U3lVzEOAAFBp4q6X2zvpjg5wZY' }}
        center={props.center}
        defaultZoom={15}
      >
        {
          props.eventList.map(event => (
            <MapMarker
              lat={event.location.latitude}
              lng={event.location.longitude}
              value={props.zipCode}
              markerClick={props.markerClick}
            />
          ))
        }
      </GoogleMapReact>
    </div>
  );
};

export default MapView;

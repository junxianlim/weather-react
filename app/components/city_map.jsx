import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

function CityMap({lon, lat, marker}) {
  console.log(marker)
  return (
    <GoogleMapLoader
      containerElement={ <div className="map" /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: lat, lng: lon }}>
          <Marker position={{ lat: marker.lat, lng: marker.lon }} key={marker.key} defaultAnimation={marker.defaultAnimation} />
        </GoogleMap>
      }
    />
  )
}

export default CityMap

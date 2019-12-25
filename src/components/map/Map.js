import React, { useEffect } from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { connect } from "react-redux";

import AdsMarker from "../marker/AdsMarker";

import { postMarker, getMarkers } from "../../redux/actions/markerActions";

// import PolygonFromArray from "../polygon/PolygonFromArray";
// import Lviv from "../../utils/polygons/Lviv";

const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = props => {
  useEffect(() => {
    props.getMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.closeModal();
  }, [props.markers]);

  const onMapClick = e => {
    const location = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    };
    props.openModal(location);
  };

  // Checking if center is passed through props
  const center = props.center
    ? props.center
    : { lat: 49.841659, lng: 24.031592 };

  return (
    <GoogleMap
      defaultZoom={props.center ? 19 : 13}
      defaultCenter={center}
      // center={center}
      onClick={onMapClick}
      options={{
        styles: [
          {
            elementType: "labels",
            featureType: "poi",
            stylers: [{ visibility: "off" }]
          }
        ]
      }}
    >
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {props.markers.markers.map(marker => (
          <AdsMarker marker={marker} key={marker._id} />
        ))}
      </MarkerClusterer>
      {/* <PolygonFromArray cityArray={Lviv} /> */}
    </GoogleMap>
  );
};

const mapStateToProps = state => ({
  markers: state.markers
});

export default withScriptjs(
  withGoogleMap(connect(mapStateToProps, { postMarker, getMarkers })(Map))
);
import React from "react";
import { Marker } from "react-google-maps";
// import PropTypes from "prop-types";

import MarkerInfo from "./MarkerInfo";

import illegal from "../../assets/marker-illegal.svg";
import legal from "../../assets/marker-legal.svg";
import created from "../../assets/marker-created.svg";
import passed from "../../assets/marker-passed.svg";
import removed from "../../assets/marker-removed.svg";
import notfound from "../../assets/marker-notfound.svg";
import question from "../../assets/marker-question.svg";

const AdsMarker = props => {
  // Create marker icon
  let markerIcon;
  switch (props.marker.statusChange[props.marker.statusChange.length - 1].to) {
    case "illegal":
      markerIcon = illegal;
      break;
    case "created":
      markerIcon = created;
      break;
    case "legal":
      markerIcon = legal;
      break;
    case "passed":
      markerIcon = passed;
      break;
    case "removed":
      markerIcon = removed;
      break;
    case "notfound":
      markerIcon = notfound;
      break;
    default:
      markerIcon = question;
      break;
  }

  const toogleMarker = () => {
    if (props.markerOpened) {
      props.openMarker("");
    } else {
      props.openMarker(props.marker._id);
    }
  };

  return (
    <Marker
      position={props.marker.location}
      icon={markerIcon}
      onClick={toogleMarker}
    >
      {props.markerOpened && <MarkerInfo marker={props.marker} />}
    </Marker>
  );
};

export default AdsMarker;

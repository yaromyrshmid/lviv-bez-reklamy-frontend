import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteMarker } from "../../redux/actions/markerActions";
import UpdateMarkerStatus from "../forms/UpdateMarkerStatusForm";

import illegal from "../../assets/marker-illegal.svg";
import legal from "../../assets/marker-legal.svg";
import created from "../../assets/marker-created.svg";
import passed from "../../assets/marker-passed.svg";
import removed from "../../assets/marker-removed.svg";
import notfound from "../../assets/marker-notfound.svg";
import question from "../../assets/marker-question.svg";

const AdsMarker = props => {
  const [infoOpen, setinfoOpen] = useState(false);

  const toggleInfoOpen = () => {
    setinfoOpen(infoOpen => !infoOpen);
  };

  const handleDeleteMarker = () => {
    props.deleteMarker(props.marker._id);
  };

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

  return (
    <Marker
      position={props.marker.location}
      icon={markerIcon}
      onClick={toggleInfoOpen}
    >
      {infoOpen && (
        <InfoWindow>
          <>
            <p> {props.marker._id}</p>

            <img
              src={"http://localhost:5000" + props.marker.photo}
              alt="ad"
              style={{ width: "200px" }}
            />
            {props.marker.statusChange.map((status, index) => {
              return (
                <p key={index}>
                  <span>
                    {status.to} - {status.changedAt}
                  </span>
                </p>
              );
            })}
            {props.auth.user.role === "admin" && (
              <>
                <UpdateMarkerStatus
                  id={props.marker._id}
                  currentStatus={
                    props.marker.statusChange[
                      props.marker.statusChange.length - 1
                    ].to
                  }
                />
                <button onClick={handleDeleteMarker}>Видалити</button>
              </>
            )}
          </>
        </InfoWindow>
      )}
    </Marker>
  );
};

AdsMarker.propTypes = {
  deleteMarker: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteMarker })(AdsMarker);

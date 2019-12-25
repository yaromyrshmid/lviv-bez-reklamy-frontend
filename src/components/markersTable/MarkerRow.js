import React, { useState } from "react";
import { Link } from "react-router-dom";

import Spinner from "../common/Spinner/Spinner";

const MarkerRow = ({ marker }) => {
  const [loading, setloading] = useState(true);

  return (
    <tr>
      <td>{marker.statusChange[marker.statusChange.length - 1].to}</td>
      <td>
        {marker.statusChange.map((status, index) => {
          return (
            <p key={index}>
              <span>
                {status.to} - {status.changedAt}
              </span>
            </p>
          );
        })}
      </td>
      <td>{marker.comment} </td>
      <td>
        <img
          src={"http://localhost:5000" + marker.photo}
          alt="ad"
          style={{ width: "200px" }}
        />
      </td>
      <td style={{ position: "relative" }}>
        <Link to={`/map/${JSON.stringify(marker.location)}`}>
          <span
            style={{
              position: "absolute",
              zIndex: 100,
              width: "100%",
              height: "100%"
            }}
          ></span>
        </Link>
        {loading && <Spinner />}
        <iframe
          title={marker._id}
          id="gmap_canvas"
          width="300"
          height="170"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${marker.location.lat}, ${marker.location.lng}&z=15&output=embed&z=18`}
          onLoad={() => {
            setloading(false);
          }}
          // src={`https://maps.google.com/maps?q='+${marker.location.lat}+','+${marker.location.lat}+'&hl=es&z=14&amp;output=embed`}
        />

        <p>Широта: {marker.location.lat}</p>
        <p>Довгота: {marker.location.lng}</p>
      </td>
    </tr>
  );
};

export default MarkerRow;

import React from "react";
import { connect } from "react-redux";

import MapContainer from "../map/MapContainer";

const Landing = props => {
  return <MapContainer />;
};

export default connect(null)(Landing);

import React from "react";
import { Polygon } from "react-google-maps";

const PolygonFromArray = ({ cityArray }) => {
  const cityObjArray = cityArray.map(i => {
    return { lat: i[1], lng: i[0] };
  });

  return <Polygon paths={cityObjArray} />;
};

export default PolygonFromArray;

import React from "react";
import styled from "styled-components";

const AddressDisplay = ({ address }) => {
  const displayedAdress =
    address &&
    `${address.streetName ? address.streetName + ", " : ""}${
      address.streetNumber ? address.streetNumber + ", " : ""
    }${address.neighborhood ? address.neighborhood : ""}`;
  return (
    <AddressWrapper>
      <h4>{displayedAdress}</h4>
    </AddressWrapper>
  );
};

const AddressWrapper = styled.div`
  padding: 1rem;
`;

export default AddressDisplay;

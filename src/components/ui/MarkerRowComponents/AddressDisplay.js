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
      <h5>{displayedAdress}</h5>
    </AddressWrapper>
  );
};

const AddressWrapper = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
  max-height: 3.5rem;
  overflow-y: auto;
`;

export default AddressDisplay;

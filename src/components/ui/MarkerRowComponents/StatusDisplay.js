import React, { useState } from "react";
import styled from "styled-components";

import statuses from "../../../utils/statuses";

const StatusDisplay = ({ currentStatus }) => {
  const [display, setdisplay] = useState("status");

  return (
    <StatusWrapper
      status={currentStatus.to}
      onMouseOver={() => {
        setdisplay("time");
      }}
      onMouseOut={() => {
        setdisplay("status");
      }}
    >
      {display === "status" ? (
        <h5>
          {statuses.find(status => status.value === currentStatus.to).ukr}
        </h5>
      ) : (
        <h5>{new Date(currentStatus.changedAt).toLocaleString("uk-UA")}</h5>
      )}
    </StatusWrapper>
  );
};

const StatusWrapper = styled.div`
  height: 3rem;
  width: 100%;
  background-color: ${props => `var(--${props.status})`};
  padding: 0.5rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--mainWhite);
`;

// const Time = styled.div`
//   width: 100%;
//   height: 3rem;
//   background-color: ${props => `var(--${props.status})`};
//   padding: 0.5rem 1rem 0 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;

//   /* & {
//     animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
//   } */
//   /*
//   &:hover {
//     animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
//       forwards;
//   } */
// `;

export default StatusDisplay;

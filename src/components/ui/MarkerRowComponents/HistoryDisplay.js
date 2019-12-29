import React from "react";
import styled from "styled-components";

import statuses from "../../../utils/statuses";

const HistoryDisplay = ({ statusChange }) => {
  return (
    <HistoryWrapper>
      {statusChange.map((status, index) => (
        <p key={index}>
          {statuses
            .find(statusObj => statusObj.value === status.to)
            .ukr.toLowerCase()}
          : {new Date(status.changedAt).toLocaleString("uk-UA")}
        </p>
      ))}
    </HistoryWrapper>
  );
};

const HistoryWrapper = styled.div`
  padding: 1rem;
`;

export default HistoryDisplay;

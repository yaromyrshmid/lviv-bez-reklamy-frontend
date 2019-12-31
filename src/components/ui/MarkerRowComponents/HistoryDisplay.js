import React from "react";
import styled from "styled-components";

import statuses from "../../../utils/statuses";

const HistoryDisplay = ({ statusChange, admin }) => {
  return (
    <HistoryWrapper admin={admin}>
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
  max-height: ${props => (props.admin ? "100%" : "60%")};
  overflow-y: auto;
  color: ${props => (props.admin ? "var(--mainWhite)" : "var(--main)")};
  overflow-x: hidden;
`;

export default HistoryDisplay;

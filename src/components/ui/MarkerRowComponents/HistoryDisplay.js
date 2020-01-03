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
  margin-top: 1rem;
  padding-left: 1rem;
  max-height: 200px;
  overflow-y: auto;
  color: ${props => (props.admin ? "var(--mainWhite)" : "var(--main)")};
  overflow-x: hidden;

  @media (min-width: 992px) {
    max-height: ${props => (props.admin ? "100%" : "300px")};
  }
`;

export default HistoryDisplay;

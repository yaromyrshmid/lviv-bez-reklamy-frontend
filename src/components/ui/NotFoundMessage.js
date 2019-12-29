import React from "react";
import styled from "styled-components";

const NotFoundMessage = props => {
  return (
    <NotFoundMessageWrapper>
      <h3>{props.children}</h3>
    </NotFoundMessageWrapper>
  );
};

const NotFoundMessageWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

export default NotFoundMessage;

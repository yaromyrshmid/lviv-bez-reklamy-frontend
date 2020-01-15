import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GiTwoCoins } from "react-icons/gi";
import styled from "styled-components";

import { getSilver } from "../../../redux/actions/silverActions";

const Silver = ({ silver, getSilver }) => {
  useEffect(() => {
    if (!silver) {
      getSilver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <GiTwoCoins />
      <span> {silver}</span>
      <p>{silver} срібняків</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: silver;
  position: relative;
  padding-top: 0.4rem;
  margin: 0;
  font-size: 1.2rem;

  p {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    white-space: nowrap;
    background-color: var(--mainDark);
    padding: 0.1rem 1rem;
    right: 0;
  }

  &:hover {
    p {
      visibility: visible;
    }
  }
`;

const mapStateToProps = state => ({
  silver: state.profile.silver
});

export default connect(mapStateToProps, { getSilver })(Silver);

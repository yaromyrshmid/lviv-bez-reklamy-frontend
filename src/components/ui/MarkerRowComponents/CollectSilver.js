import React, { useState } from "react";
import { connect } from "react-redux";
import { GiTwoCoins } from "react-icons/gi";
import styled from "styled-components";

import { Button } from "../";
import { collectSilver } from "../../../redux/actions/silverActions";

const CollectSilver = ({
  markerId,
  silverAllocated,
  silverCollected,
  collectSilver
}) => {
  const [success, setsuccess] = useState(false);
  return (
    <>
      {silverAllocated && !silverCollected && (
        <Wrapper>
          {!success ? (
            <Button
              margin="1rem auto"
              onClick={() => collectSilver(markerId, () => setsuccess(true))}
              width="auto"
            >
              <span>
                <GiTwoCoins /> 30 срібняків
              </span>
            </Button>
          ) : (
            <span>Срібняки отримано</span>
          )}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
`;

export default connect(null, { collectSilver })(CollectSilver);

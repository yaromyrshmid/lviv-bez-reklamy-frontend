import React, { useState } from "react";
import { connect } from "react-redux";

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
        <>
          {!success ? (
            <Button
              margin="1rem auto"
              onClick={() => collectSilver(markerId, () => setsuccess(true))}
            >
              <span>30 срібняків</span>
            </Button>
          ) : (
            <span>Срібняки отримано</span>
          )}
        </>
      )}
    </>
  );
};

export default connect(null, { collectSilver })(CollectSilver);

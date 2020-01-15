import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSilver } from "../../../redux/actions/silverActions";

const Silver = ({ silver, getSilver }) => {
  useEffect(() => {
    if (!silver) {
      getSilver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>Срібняків: {silver}</span>;
};

const mapStateToProps = state => ({
  silver: state.profile.silver
});

export default connect(mapStateToProps, { getSilver })(Silver);

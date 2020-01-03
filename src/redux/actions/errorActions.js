import * as actionTypes from "../actions/types";

// Clear errors
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS
  };
};

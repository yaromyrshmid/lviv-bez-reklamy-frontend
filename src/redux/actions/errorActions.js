import * as actionTypes from "../actions/types";

// Clear errors
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS
  };
};

// Get errors
export const getErrors = err => {
  if (err.response) {
    return {
      type: actionTypes.GET_ERRORS,
      payload: err.response.data
    };
  } else {
    return {
      type: actionTypes.GET_ERRORS,
      payload: { server: "Помилка серверу" }
    };
  }
};

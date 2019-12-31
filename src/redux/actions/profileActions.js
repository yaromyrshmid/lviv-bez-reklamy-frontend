import axios from "../../utils/axios";

import * as actionTypes from "../actions/types";

// Get User's markers
export const getUserMarkers = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/markers/usermarkers")
    .then(res => {
      dispatch({
        type: actionTypes.GET_USER_MARKERS,
        payload: res.data.reverse()
      });
    })
    .catch(err =>
      dispatch({ type: actionTypes.GET_USER_MARKERS, payload: null })
    );
};

// Set loading state
export const setProfileLoading = () => {
  return {
    type: actionTypes.PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_PROFILE
  };
};

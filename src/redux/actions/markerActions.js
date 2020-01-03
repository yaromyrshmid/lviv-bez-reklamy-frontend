import axios from "../../utils/axios";

import * as actionTypes from "../actions/types";

// Get markers
export const getMarkers = () => dispatch => {
  dispatch(setMarkersLoading());
  axios
    .get("/api/markers")
    .then(res => {
      dispatch({ type: actionTypes.GET_MARKERS, payload: res.data });
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: { nomarkersfound: "Маркерів не знайдено" }
      })
    );
};

// Post marker
export const postMarker = postData => dispatch => {
  axios
    .post("/api/markers", postData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => dispatch({ type: actionTypes.POST_MARKER, payload: res.data }))
    .catch(err => {
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data });
    });
};

// Set loading state
export const setMarkersLoading = () => {
  return {
    type: actionTypes.MARKERS_LOADING
  };
};

// Post comment to marker if last comment was from moderator
export const postComment = (comment, id) => dispatch => {
  axios
    .post(`/api/markers/comment/${id}`, { comment: comment })
    .then(res =>
      dispatch({ type: actionTypes.UPDATE_USER_MARKER, payload: res.data })
    )
    .catch(err => {
      dispatch({ type: actionTypes.GET_ERRORS, payload: err });
    });
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS
  };
};

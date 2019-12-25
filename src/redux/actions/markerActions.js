import axios from "axios";

import * as actionTypes from "../actions/types";

// Get markers
export const getMarkers = () => dispatch => {
  dispatch(setMarkersLoading());
  axios
    .get("/api/markers")
    .then(res => {
      dispatch({ type: actionTypes.GET_MARKERS, payload: res.data });
    })
    .catch(err => dispatch({ type: actionTypes.GET_MARKERS, payload: null }));
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

// Update marker status
export const updateMarkerStatus = (newStatus, id) => dispatch => {
  axios
    .put(`/api/admin/markers/${id}`, { status: newStatus })
    .then(res =>
      dispatch({ type: actionTypes.UPDATE_MARKER, payload: res.data })
    )
    .catch(err => {
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data });
    });
};

// Delete marker
export const deleteMarker = id => dispatch => {
  axios
    .delete(`/api/admin/markers/${id}`)
    .then(res => dispatch({ type: actionTypes.DELETE_MARKER, payload: id }))
    .catch(err =>
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data })
    );
};

// Set loading state
export const setMarkersLoading = () => {
  return {
    type: actionTypes.MARKERS_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS
  };
};

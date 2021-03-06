import axios from "../../utils/axios";

import * as actionTypes from "../actions/types";

// Update marker status on map
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

// Delete marker on map and in table
export const deleteMarker = id => dispatch => {
  axios
    .delete(`/api/admin/markers/${id}`)
    .then(res => dispatch({ type: actionTypes.DELETE_MARKER, payload: id }))
    .catch(err =>
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data })
    );
};

//Get markers for admin table
export const getAdminMarkers = (
  page,
  statusFilter,
  selectedDate
) => dispatch => {
  dispatch(setMarkersLoading());
  axios
    .post(`/api/admin/markers/${page}`, {
      statusFilter: statusFilter,
      dateFilter: selectedDate
    })
    .then(res => {
      dispatch({
        type: actionTypes.GET_ADMIN_MARKERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: actionTypes.GET_ADMIN_MARKERS, payload: null })
    );
};

//Post admin comment
export const postAdminComment = (comment, id) => dispatch => {
  axios
    .post(`/api/admin/markers/comment/${id}`, { comment: comment })
    .then(res =>
      dispatch({ type: actionTypes.UPDATE_MARKER, payload: res.data })
    )
    .catch(err => {
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data });
    });
};

//Ban user
export const banUser = userId => dispatch => {
  axios
    .put(`/api/admin/users/ban/${userId}`)
    .then(res =>
      dispatch({ type: actionTypes.UPDATE_USER_IN_MARKERS, payload: res.data })
    )
    .catch(err => {
      console.log(err);
    });
};

// Set loading state
export const setMarkersLoading = () => {
  return {
    type: actionTypes.ADMIN_LOADING
  };
};

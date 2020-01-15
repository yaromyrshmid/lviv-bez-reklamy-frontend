import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../../utils/setAuthToken";
import * as actionTypes from "../actions/types";
import { getErrors } from "./errorActions";
import { setCurrentUser } from "./authActions";

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

// Get user's picture & email
export const getUserProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res => {
      dispatch({
        type: actionTypes.GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
};

// Change user's photo
export const setProfilePhoto = photo => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/profile/photo", { image: photo })
    .then(res => {
      dispatch({
        type: actionTypes.SET_PROFILE_PHOTO,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
};

// Change user's name
export const changeName = name => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/profile/name", { name: name })
    .then(res => {
      // Save to local storage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      // Stop profile loading
      dispatch(stopProfileLoading());
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
};

// Change password
export const changePassword = (userData, callback) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/profile/password", userData)
    .then(res => callback())
    .catch(err => {
      dispatch(getErrors(err));
    });
};

// Set loading state
export const setProfileLoading = () => {
  return {
    type: actionTypes.PROFILE_LOADING
  };
};

// Stop profile loading state
const stopProfileLoading = () => {
  return {
    type: actionTypes.PROFILE_LOADING_STOP
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_PROFILE
  };
};

import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../../utils/setAuthToken";
import * as actionTypes from "../actions/types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get user Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
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
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - google
export const googleLogin = token => dispatch => {
  axios
    .post("/api/google/", { id_token: token })
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
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - google
export const facebookLogin = token => dispatch => {
  axios.post("/api/facebook/", { id_token: token });
  //   .then(res => {
  //     // Save to local storage
  //     const { token } = res.data;
  //     localStorage.setItem("jwtToken", token);
  //     // Set token to Auth header
  //     setAuthToken(token);
  //     // Decode token to get user data
  //     const decoded = jwt_decode(token);
  //     // Set current user
  //     dispatch(setCurrentUser(decoded));
  //   })
  //   .catch(err =>
  //     dispatch({
  //       type: actionTypes.GET_ERRORS,
  //       payload: err.response.data
  //     })
  //   );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {}
  dispatch(setCurrentUser({}));
};

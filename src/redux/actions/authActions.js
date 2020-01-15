import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../../utils/setAuthToken";
import * as actionTypes from "../actions/types";
import { getErrors } from "./errorActions";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      history.push("/registersuccess");
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
};

// Email confirmation
export const confirmEmail = emailConfirmationToken => dispatch => {
  axios
    .post(`/api/users/confirmemail/${emailConfirmationToken}`)
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
    .catch(err => {
      dispatch(getErrors(err));
    });
};

// Forgot password - Send link to email to set new password
export const forgotPassword = (email, setsuccess) => dispatch => {
  axios
    .post("/api/users/forgotpassword", { email: email })
    .then(res => {
      // history.push("/forgotpasswordlinksent");
      setsuccess(true);
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set new password after forgot password
export const setNewPassword = (
  passwords,
  passwordResetToken,
  setsuccess
) => dispatch => {
  axios
    .post(`/api/users/resetpassword/${passwordResetToken}`, passwords)
    .then(res => setsuccess(true))
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

// Login - facebook
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

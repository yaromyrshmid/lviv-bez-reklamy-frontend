import axios from "../../utils/axios";

import * as actionTypes from "../actions/types";
import { getErrors } from "./errorActions";

// Get silver
export const getSilver = () => dispatch => {
  axios
    .get("/api/silver/")
    .then(res => {
      dispatch({
        type: actionTypes.GET_SILVER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
};

// Collect silver
export const collectSilver = (markerId, callback) => dispatch => {
  axios
    .post(`/api/silver/${markerId}`)
    .then(res => {
      callback();
      dispatch({
        type: actionTypes.GET_SILVER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
};

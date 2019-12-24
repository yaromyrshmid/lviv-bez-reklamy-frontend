import * as actionTypes from "../actions/types";

const initialState = {
  userMarkers: [],
  profile: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_MARKERS:
      return {
        ...state,
        userMarkers: action.payload,
        loading: false
      };
    case actionTypes.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null,
        userMarkers: []
      };
    default:
      return state;
  }
}

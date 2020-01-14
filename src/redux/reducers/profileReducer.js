import * as actionTypes from "../actions/types";

const initialState = {
  userMarkers: [],
  profile: null,
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_MARKERS:
      return {
        ...state,
        userMarkers: action.payload,
        loading: false
      };
    case actionTypes.UPDATE_USER_MARKER:
      return {
        ...state,
        userMarkers: state.userMarkers.map(marker => {
          if (marker._id !== action.payload._id) {
            return marker;
          } else {
            return action.payload;
          }
        })
      };
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case actionTypes.SET_PROFILE_PHOTO:
      return {
        ...state,
        profile: {
          ...state.profile,
          photo: action.payload
        },
        loading: false
      };
    case actionTypes.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PROFILE_LOADING_STOP:
      return {
        ...state,
        loading: false
      };
    case actionTypes.CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null,
        userMarkers: []
      };
    case actionTypes.GET_ERRORS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

import * as actionTypes from "../actions/types";

const initialState = {
  markers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MARKERS:
      return {
        ...state,
        markers: action.payload,
        loading: false
      };
    case actionTypes.POST_MARKER:
      return {
        ...state,
        markers: [action.payload, ...state.markers]
      };
    case actionTypes.UPDATE_MARKER:
      return {
        ...state,
        markers: [
          ...state.markers.filter(marker => marker._id !== action.payload._id),
          action.payload
        ]
      };

    case actionTypes.MARKERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.DELETE_MARKER:
      return {
        ...state,
        markers: state.markers.filter(marker => marker._id !== action.payload)
      };
    default:
      return state;
  }
}

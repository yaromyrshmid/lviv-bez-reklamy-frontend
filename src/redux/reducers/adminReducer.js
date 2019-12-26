import * as actionTypes from "../actions/types";

const initialState = {
  markers: [],
  totalPages: 0,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ADMIN_MARKERS:
      return {
        ...state,
        markers: action.payload.markers,
        totalPages: action.payload.totalPages,
        loading: false
      };
    // case actionTypes.UPDATE_MARKER:
    //   return {
    //     ...state,
    //     markers: [
    //       ...state.markers.filter(marker => marker._id !== action.payload._id),
    //       action.payload
    //     ]
    //   };
    case actionTypes.ADMIN_LOADING:
      return {
        ...state,
        loading: true
      };
    // case actionTypes.DELETE_MARKER:
    //   return {
    //     ...state,
    //     markers: state.markers.filter(marker => marker._id !== action.payload)
    //   };
    default:
      return state;
  }
}

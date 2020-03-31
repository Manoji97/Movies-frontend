import * as actiontypes from "../actions/actiontypes";

const initialstate = {
  recommendations: [],
  error_message: ""
};

const RecommendationReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actiontypes.LoadRecommendations:
      let errorMessage = "";
      if (!action.value.success) {
        errorMessage = "Network Failure";
      }
      state = {
        ...state,
        recommendations: action.value.recommendations,
        error_message: errorMessage
      };
      break;
    default:
      break;
  }
  return state;
};

export default RecommendationReducer;

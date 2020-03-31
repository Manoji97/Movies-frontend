import * as actiontypes from "./actiontypes";
import * as axios from "../../axioscreation";

const LoadRecommedations = (success_bool, recommendations_list = null) => {
  return {
    type: actiontypes.LoadRecommendations,
    value: {
      success: success_bool,
      recommendations: recommendations_list
    }
  };
};

export const GetRecommendations = movieId => {
  return dispatch => {
    axios.Movielink.get("/" + movieId + "/get_Recommendations/")
      .then(res => {
        dispatch(LoadRecommedations(true, res.data));
      })
      .catch(() => dispatch(LoadRecommedations(false)));
  };
};

import * as actiontypes from "./actiontypes";

export const doMainsearch = search_value => {
  return {
    type: actiontypes.doMainsearch,
    value: search_value
  };
};

export const doSearch = search_date => {
  return {
    type: actiontypes.doSearch,
    value: search_date
  };
};

export const doLogin = user_info => {
  return {
    type: actiontypes.doLogin,
    value: user_info
  };
};

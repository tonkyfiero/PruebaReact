import * as types from "../actionTypes";

export const getUsers = (payload, dispatch) => {
  dispatch({ type: types.GET_USERS, payload });
};

export const setUsersAutoload = dispatch => {
  dispatch({ type: types.SET_USERS_AUTOLOAD });
};

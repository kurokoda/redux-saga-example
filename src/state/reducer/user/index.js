import { UserActionTypes } from "../../action";

const defaultState = null;

const user = (state = defaultState, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return action.payload;
    case UserActionTypes.USER_LOGOUT_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};

export default user;

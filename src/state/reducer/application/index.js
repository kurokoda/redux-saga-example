import { ApplicationActionTypes } from "../../action";

const defaultState = { isInitialized: false };

const user = (state = defaultState, action) => {
  switch (action.type) {
    case ApplicationActionTypes.INITIALIZE_APPLICATION_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default user;

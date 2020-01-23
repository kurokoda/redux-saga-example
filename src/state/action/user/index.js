const UserActionTypes = {
  USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
  USER_LOGIN_ERROR: "USER_LOGIN_ERROR",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGOUT_REQUEST: "USER_LOGOUT_REQUEST",
  USER_LOGOUT_ERROR: "USER_LOGOUT_ERROR",
  USER_LOGOUT_SUCCESS: "USER_LOGOUT_SUCCESS"
};

function userLoginRequest(requestData) {
  return {
    payload: requestData,
    type: UserActionTypes.USER_LOGIN_REQUEST
  };
}

function userLoginError() {
  return {
    type: UserActionTypes.USER_LOGIN_ERROR
  };
}

function userLoginSuccess(responseData) {
  return {
    payload: responseData,
    type: UserActionTypes.USER_LOGIN_SUCCESS
  };
}

function userLogoutRequest(requestData) {
  return {
    payload: requestData,
    type: UserActionTypes.USER_LOGOUT_REQUEST
  };
}

function userLogoutError() {
  return {
    type: UserActionTypes.USER_LOGOUT_ERROR
  };
}

function userLogoutSuccess(responseData) {
  return {
    payload: responseData,
    type: UserActionTypes.USER_LOGOUT_SUCCESS
  };
}

const UserActionCreators = {
  userLoginRequest,
  userLoginError,
  userLoginSuccess,
  userLogoutRequest,
  userLogoutError,
  userLogoutSuccess
};

export { UserActionCreators, UserActionTypes };

// @flow

import { call, put, takeLatest } from "redux-saga/effects";
import { UserActionCreators, UserActionTypes } from "../../action";
import {
  analyticsDispatchService,
  userLoginService,
  userLogoutService
} from "../../service";

const handleLoginRequest = function*(action) {
  try {
    const user = yield call(userLoginService, action.payload);
    yield put(UserActionCreators.userLoginSuccess(user));
    yield call(analyticsDispatchService, "ANALYTICS: User Login Success", user);
  } catch (error) {
    yield put(UserActionCreators.userLoginError(error));
  }
};

const handleLogoutRequest = function*() {
  try {
    yield put(UserActionCreators.userLogoutSuccess());
    yield call(analyticsDispatchService, "ANALYTICS: User Logout Success");
  } catch (error) {
    yield put(UserActionCreators.userLogoutError(error));
  }
};

const Saga = function*() {
  yield takeLatest(UserActionTypes.USER_LOGIN_REQUEST, handleLoginRequest);
  yield takeLatest(UserActionTypes.USER_LOGOUT_REQUEST, handleLogoutRequest);
};

export default Saga;

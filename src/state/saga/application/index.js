// @flow

import { call, put, takeLatest } from "redux-saga/effects";
import {
  ApplicationActionCreators,
  ApplicationActionTypes
} from "../../action";
import { applicationInitializeService } from "../../service";

const handleInitializeApplicationRequest = function*() {
  try {
    yield call(applicationInitializeService());
    yield put(ApplicationActionCreators.initializeApplicationSuccess());
  } catch (error) {
    yield put(ApplicationActionCreators.initializeApplicationError(error));
  }
};

const Saga = function*() {
  yield takeLatest(
    ApplicationActionTypes.INITIALIZE_APPLICATION_REQUEST,
    handleInitializeApplicationRequest
  );
};

export default Saga;

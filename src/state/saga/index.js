import { all, fork } from "redux-saga/effects";

import applicationSagas from "./application";
import productSagas from "./product";
import userSagas from "./user";

export default function* root() {
  yield all([fork(applicationSagas)]);
  yield all([fork(productSagas)]);
  yield all([fork(userSagas)]);
}

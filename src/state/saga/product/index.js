// @flow

import { call, put, takeLatest } from "redux-saga/effects";
import { ProductActionCreators, ProductActionTypes } from "../../action";
import {
  fetchOneProductBySKUService,
  fetchAllProductsService
} from "../../service";

const handleFetchAllProductsRequest = function*() {
  try {
    const products = yield call(fetchAllProductsService);
    yield put(ProductActionCreators.fetchProductsSuccess(products));
  } catch (error) {
    console.log("fetchProductsError", error);
    yield put(ProductActionCreators.fetchProductsError(error));
  }
};

const handleFetchProductBySKURequest = function*(action) {
  try {
    const product = yield call(fetchOneProductBySKUService, action.payload);
    console.log("product", product);
    yield put(ProductActionCreators.fetchProductBySKUSuccess(product));
  } catch (error) {
    console.log("fetchProductError", error);
    yield put(ProductActionCreators.fetchProductBySKUError(error));
  }
};

const Saga = function*() {
  yield takeLatest(
    ProductActionTypes.FETCH_PRODUCTS_REQUEST,
    handleFetchAllProductsRequest
  );
  yield takeLatest(
    ProductActionTypes.FETCH_PRODUCT_BY_SKU_REQUEST,
    handleFetchProductBySKURequest
  );
};

export default Saga;

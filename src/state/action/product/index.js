const ProductActionTypes = {
  FETCH_PRODUCT_BY_SKU_REQUEST: "FETCH_PRODUCT_BY_SKU_REQUEST",
  FETCH_PRODUCT_BY_SKU_ERROR: "FETCH_PRODUCT_BY_SKU_ERROR",
  FETCH_PRODUCT_BY_SKU_SUCCESS: "FETCH_PRODUCT_BY_SKU_SUCCESS",
  FETCH_PRODUCTS_REQUEST: "FETCH_PRODUCTS_REQUEST",
  FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FLUSH_PRODUCT: "FLUSH_PRODUCT",
  FLUSH_PRODUCTS: "FLUSH_PRODUCTS"
};

function fetchProductBySKU(payload) {
  return {
    payload,
    type: ProductActionTypes.FETCH_PRODUCT_BY_SKU_REQUEST
  };
}

function fetchProductBySKUSuccess(payload) {
  return {
    payload,
    type: ProductActionTypes.FETCH_PRODUCT_BY_SKU_SUCCESS
  };
}

function fetchProductBySKUError(error) {
  return {
    error,
    type: ProductActionTypes.FETCH_PRODUCT_BY_SKU_ERROR
  };
}

function fetchProducts() {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_REQUEST
  };
}

function fetchProductsSuccess(payload) {
  return {
    payload,
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
  };
}

function fetchProductsError(error) {
  return {
    error,
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR
  };
}

function flushProduct() {
  return {
    type: ProductActionTypes.FLUSH_PRODUCT
  };
}

function flushProducts() {
  return {
    type: ProductActionTypes.FLUSH_PRODUCTS
  };
}

const ProductActionCreators = {
  fetchProductBySKU,
  fetchProductBySKUError,
  fetchProductBySKUSuccess,
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
  flushProduct,
  flushProducts
};

export { ProductActionCreators, ProductActionTypes };

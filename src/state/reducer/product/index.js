import { ProductActionTypes } from "../../action";

const defaultState = null;

const product = (state = defaultState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT_BY_SKU_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default product;

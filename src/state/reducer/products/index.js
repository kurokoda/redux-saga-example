import { REHYDRATE } from "redux-persist";
import { ProductActionTypes } from "../../action";

const defaultState = null;

const products = (state = defaultState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return action.payload;
    case REHYDRATE:
      return action.payload ? action.payload.products : defaultState;
    default:
      return state;
  }
};

export default products;

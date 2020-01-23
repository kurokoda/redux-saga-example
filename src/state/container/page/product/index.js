import React from "react";
import { connect } from "react-redux";
import { ProductActionCreators } from "../../../action/product";

export function mapStateToProps({ product }) {
  return {
    product
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchProduct: sku => dispatch(ProductActionCreators.fetchProductBySKU(sku)),
    flushProduct: () => dispatch(ProductActionCreators.flushProduct())
  };
}

const ProductContainer = ({ component }) => {
  const ConnectedProductComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
  return <ConnectedProductComponent />;
};

export { ProductContainer };

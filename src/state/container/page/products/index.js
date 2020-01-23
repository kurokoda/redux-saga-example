import React from "react";
import { connect } from "react-redux";
import { ProductActionCreators } from "../../../action/product";

export function mapStateToProps({ products }) {
  return {
    products
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(ProductActionCreators.fetchProducts()),
    flushProducts: () => dispatch(ProductActionCreators.flushProducts())
  };
}

const ProductsContainer = ({ component }) => {
  const ConnectedProductsComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
  return <ConnectedProductsComponent />;
};

export { ProductsContainer };

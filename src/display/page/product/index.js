import "../../../application.scss";
import "./component.scss";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { PageHeader } from "../../header/page";

const ProductComponent = withRouter(
  ({ fetchProduct, flushProduct, history, match, product }) => {
    useEffect(initialize, []);

    function initialize() {
      const { sku } = match.params;
      fetchProduct(sku);
      return () => {
        flushProduct(sku);
      };
    }

    return (
      <div className="application-page__container">
        <PageHeader>Product Page</PageHeader>
        {product ? (
          <div>
            <div>{product.displayName}</div>
            <div>{product.description}</div>
          </div>
        ) : (
          <h3>Loading product...</h3>
        )}
      </div>
    );
  }
);

ProductComponent.propTypes = {
  product: PropTypes.object,
  fetchProduct: PropTypes.func.isRequired,
  flushProduct: PropTypes.func.isRequired
};

export { ProductComponent };

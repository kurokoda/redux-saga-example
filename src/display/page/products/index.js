import "../../../application.scss";
import "./component.scss";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { PageHeader } from "../../header/page";

const ProductsComponent = withRouter(
  ({ fetchProducts, flushProducts, history, products }) => {
    console.log(history);
    useEffect(initialize, []);

    function initialize() {
      fetchProducts();
      return () => {
        flushProducts();
      };
    }

    function onProductClick(event) {
      const { sku } = event.target.dataset;
      history.push(`/product/${sku}`);
    }

    return (
      <div className="application-page__container">
        <PageHeader>Products Page</PageHeader>
        {products ? (
          products.map((product, index) => {
            const key = `products-page-product-${index}`;
            return (
              <div key={key}>
                <div>{product.displayName}</div>
                <div>{product.description}</div>
                <Button
                  data-sku={product.sku}
                  onClick={onProductClick}
                  variant="primary"
                >
                  View
                </Button>
              </div>
            );
          })
        ) : (
          <h3>Loading products...</h3>
        )}
      </div>
    );
  }
);

ProductsComponent.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func.isRequired,
  flushProducts: PropTypes.func.isRequired
};

export { ProductsComponent };

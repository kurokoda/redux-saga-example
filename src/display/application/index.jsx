import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  HomeContainer,
  ProductContainer,
  ProductsContainer,
  UserContainer
} from "../../state/container/page";
import {
  ErrorComponent,
  HomeComponent,
  ProductComponent,
  ProductsComponent,
  UserComponent
} from "../page";
import Footer from "../footer";
import ApplicationHeaderContainer from "../../state/container/header/application";
import ApplicationHeaderComponent from "../header/application";

function Application({
  initializeApplicationRequest,
  isApplicationInitialized
}) {
  useEffect(initialize, []);

  function initialize() {
    initializeApplicationRequest();
  }

  return (
    <>
      {isApplicationInitialized ? (
        <BrowserRouter>
          <ApplicationHeaderContainer component={ApplicationHeaderComponent} />
          <Switch>
            <Route
              path="/"
              render={data => <HomeContainer component={HomeComponent} />}
              exact
            />
            <Route
              path="/product/:sku"
              render={data => <ProductContainer component={ProductComponent} />}
              exact
            />
            <Route
              path="/products"
              render={data => (
                <ProductsContainer component={ProductsComponent} />
              )}
              exact
            />
            <Route
              path="/user"
              render={data => <UserContainer component={UserComponent} />}
              exact
            />
            <Route component={ErrorComponent} />
          </Switch>
          <Footer />
        </BrowserRouter>
      ) : (
        <div>Application is initializing</div>
      )}
    </>
  );
}

Application.propTypes = {
  initializeApplicationRequest: PropTypes.func.isRequired,
  isApplicationInitialized: PropTypes.bool.isRequired
};

export default Application;

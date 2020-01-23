import React from "react";
import { Link } from "react-router-dom";
import "./component.scss";

function ApplicationHeaderComponent({ user }) {
  return (
    <header className="application-header__container">
      <Link className="application-header__link" to="/">
        HOME
      </Link>
      <Link className="application-header__link" to="/products">
        PRODUCTS
      </Link>
      {user && (
        <Link className="application-header__link" to="/user">
          PROFILE
        </Link>
      )}
    </header>
  );
}

export default ApplicationHeaderComponent;

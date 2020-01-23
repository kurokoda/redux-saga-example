import "../../../application.scss";
import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import "./component.scss";
import { PageHeader } from "../../header/page";
import { dummyUserData } from "../../../data";

function HomeComponent({ login, logout, strings, user }) {

  function onLoginClick() {
    login(dummyUserData);
  }

  function onLogoutClick() {
    logout();
  }

  return (
    <div className="application-page__container">
      <PageHeader>{strings.headerCopy}</PageHeader>
      <p>{user ? strings.loggedInCopy : strings.loggedOutCopy}</p>
      {user ? (
        <Button onClick={onLogoutClick} variant="primary">
          {strings.logoutButtonCopy}
        </Button>
      ) : (
        <Button onClick={onLoginClick} variant="primary">
          {strings.loginButtonCopy}
        </Button>
      )}
    </div>
  );
}

HomeComponent.propTypes = {
  user: PropTypes.object,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export { HomeComponent };

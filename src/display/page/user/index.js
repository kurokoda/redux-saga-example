import "../../../application.scss";
import "./component.scss";
import PropTypes from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import { PageHeader } from "../../header/page";

function UserComponent({ user }) {
  return (
    <div className="application-page__container">
      <PageHeader>User Page</PageHeader>
      {user ? <div>This is your userpage</div> : <Redirect to="/" />}
    </div>
  );
}

UserComponent.propTypes = {
  user: PropTypes.object
};

export { UserComponent };

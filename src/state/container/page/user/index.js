import React from "react";
import { connect } from "react-redux";
import { UserActionCreators } from "../../../action/user";

export function mapStateToProps({ user }) {
  return {
    user
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    login: requestData =>
      dispatch(UserActionCreators.userLoginRequest(requestData)),
    logout: () => dispatch(UserActionCreators.userLogoutRequest())
  };
}

const UserContainer = ({ component }) => {
  const ConnectedUserComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
  return <ConnectedUserComponent />;
};

export { UserContainer };

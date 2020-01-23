import React from "react";
import { connect } from "react-redux";
import { UserActionCreators } from "../../../action/user";
import { getHomePageStringsService } from "src/state/service";

export function mapStateToProps({ user }) {
  return {
    strings: getHomePageStringsService(),
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

const HomeContainer = ({ component }) => {
  const ConnectedHomeComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
  return <ConnectedHomeComponent />;
};

export { HomeContainer };

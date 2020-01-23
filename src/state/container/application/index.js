import React from "react";
import { connect } from "react-redux";
import { ApplicationActionCreators } from "../../action";

function mapStateToProps({ application }) {
  return {
    isApplicationInitialized: application.isInitialized
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initializeApplicationRequest: () =>
      dispatch(ApplicationActionCreators.initializeApplicationRequest())
  };
}

export default ({ component }) => {
  const ConnectedApplicationComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
  return <ConnectedApplicationComponent />;
};

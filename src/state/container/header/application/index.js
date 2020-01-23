import React from "react";
import { connect } from "react-redux";

function mapStateToProps({ user }) {
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default ({ component }) => {
  const ConnectedApplicationHeaderComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
  return <ConnectedApplicationHeaderComponent />;
};

import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ Auth, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth.isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    Auth: state.Auth
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);

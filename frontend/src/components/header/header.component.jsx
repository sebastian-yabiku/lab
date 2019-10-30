import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthLogin, AuthLoggedIn } from "../../features/auth";
import "./header.scss";

function HeaderComponent(props) {
  let { Auth } = props;
  return (
    <header className="header d-flex ai-center jc-space-between">
      <div className="header__left">
        <Link className="header__logo" to="/">
          Facebook
        </Link>
      </div>
      <div className="header__right">
        {!Auth.isLogin ? <AuthLogin /> : <AuthLoggedIn />}
      </div>
    </header>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    Auth: state.Auth
  };
};

const Header = connect(
  mapStateToProps,
  null
)(HeaderComponent);

export { Header };

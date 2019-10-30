import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setLogin } from "../../../auth/store/actions";
import { Input, Button } from "../../../../ui";
import "./login.scss";

function logoUt({ setLogin: actionSetLogin }) {
  actionSetLogin({
    token: "",
    isLogin: false,
    user: ""
  });
}

function AuthLoginContainer(props) {
  const { history, setLogin: actionSetLogin } = props;

  const [login, setLogin] = useState({
    name: "",
    password: ""
  });

  useEffect(() => {
    window.sessionStorage.clear();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    
    actionSetLogin({
      token: 123456,
      isLogin: true,
      user: "Sebastian Yabiku .S"
    });
    history.replace("wall");
  }

  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="auth-login">
      <form onSubmit={handleSubmit}>
        <Input
          className="input--small"
          type="text"
          placeholder="Correo electrónico o teléfono	"
          name="name"
          value={login.name}
          onChange={handleChange}
        />
        <Input
          className="input--small"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <Button className="button--primary">Iniciar sesion</Button>
      </form>
    </div>
  );
}

function AuthLoggedInContainer(props) {
  const { Auth } = props;

  return (
    <h1>
      Hola {Auth.user} - <button onClick={() => logoUt(props)}>Logout</button>
    </h1>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    Auth: state.Auth
  };
};

const mapDispatchToProps = { setLogin };

const AuthLogin = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AuthLoginContainer);

const AuthLoggedIn = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AuthLoggedInContainer);

export { AuthLogin, AuthLoggedIn };

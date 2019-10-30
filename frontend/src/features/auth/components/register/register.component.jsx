import React from "react";
import { Input, Button, Select } from "../../../../ui";
import "./register.scss";

function AuthRegister(props) {
  return (
    <div className="auth-register">
      <h1 className="auth-register__title">
        Crea una cuenta <br />
        <small>Es rápido y fácil.</small>
      </h1>
      <form className="auth-register__form" action="">
        <div className="row">
          <div className="col">
            <Input className="input--block input--form" placeholder="Nombre" />
          </div>
          <div className="col">
            <Input className="input--block input--form" placeholder="Apellido" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Input className="input--block input--form" placeholder="Número de celular o correo electrónico" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Input className="input--block input--form" placeholder="Contraseña nueva" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Select className="select--medium select--block" />
          </div>
          <div className="col">
            <Select className="select--medium select--block" />
          </div>
          <div className="col">
            <Select className="select--medium select--block" />
          </div>
        </div>
        <div className="row">
          <div className="col ta-center">
            <Button className="button--secondary button--large">
              Registrarte
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { AuthRegister };

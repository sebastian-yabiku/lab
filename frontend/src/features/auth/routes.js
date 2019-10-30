import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRegister } from "./components";

function AuthRoutes(props) {
  return (
    <Switch>
      <Route path="/" exact component={AuthRegister}></Route>
    </Switch>
  );
}

export { AuthRoutes };

import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../router/private-route";
import { Wall } from "./components";

function WallRoutes(props) {
  return (
    <Switch>
      <PrivateRoute path="/wall" exact>
        <Wall />
      </PrivateRoute>
    </Switch>
  );
}

export { WallRoutes };

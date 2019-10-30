import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Wrapper, Header, Main, Footer } from "../components";
import { AuthRoutes, WallRoutes } from "../features";

function RouterRoot() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact component={AuthRoutes}></Route>
            <Route path="/wall" component={WallRoutes}></Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export { RouterRoot };

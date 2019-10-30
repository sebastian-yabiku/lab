import React from "react";
import { Provider } from "react-redux";
import store from "./store"
import { RouterRoot } from "./router";
import "./assets/style/app.scss";

function App() {
  return (
    <Provider store={store}>
      <RouterRoot />
    </Provider>
  );
}

export default App;

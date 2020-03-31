import React from "react";
import { Provider } from "react-redux";
import configure from "./store/configure";
import App from "./components/App";

const store = configure();

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;

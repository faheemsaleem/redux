import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import logger from "redux-logger";

import { Ruducer } from "./ruducer";
import App from "./component/App";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const store = createStore(Ruducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

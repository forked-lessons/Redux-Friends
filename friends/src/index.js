import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import { addTokenToLocalStorage } from "./actions";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger, addTokenToLocalStorage)
);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

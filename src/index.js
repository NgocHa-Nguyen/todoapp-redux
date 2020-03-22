import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//<--STORE-->
import { createStore } from "redux";
import { Provider } from "react-redux";
import myReducer from "./reducers/Index";

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);
serviceWorker.unregister();
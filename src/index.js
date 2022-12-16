import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContextHandler from "components/master/context/App.Context";
import { Router, BrowserRouter, HashRouter } from "react-router-dom";
import history from "components/master/router/history";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <HashRouter>
          <AppContextHandler>
            <App />
          </AppContextHandler>
        </HashRouter>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

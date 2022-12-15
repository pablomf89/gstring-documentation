import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContextHandler from "components/master/context/App.Context";
import { Router, BrowserRouter } from "react-router-dom";
import history from "components/master/router/history";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppContextHandler>
            <App />
          </AppContextHandler>
        </BrowserRouter>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

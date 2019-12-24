import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { clearCurrentProfile } from "./redux/actions/profileActions";

import PrivateRoute from "./components/common/PrivateRoute";
import Layout from "./components/layout/Layout";
import MapContainer from "./components/map/MapContainer";
import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MarkersTable from "./components/markersTable/MarkersTable";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/table" component={MarkersTable} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/map/:location"
              component={MapContainer}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

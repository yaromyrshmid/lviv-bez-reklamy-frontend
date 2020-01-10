import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { clearCurrentProfile } from "./redux/actions/profileActions";

import PrivateRoute from "./components/common/PrivateRoute";
import AdminRoute from "./components/common/AdminRoute";

import Layout from "./components/layout/Layout";
import MapContainer from "./components/map/MapContainer";
import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MyMarkers from "./components/myMarkers/MyMarkers";
import AdminMarkers from "./components/adminMarkers/AdminMarkers";
import PageNotFound from "./components/404/PageNotFound";

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
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/mymarkers" component={MyMarkers} />
            <PrivateRoute
              exact
              path="/map/:location"
              component={MapContainer}
            />
            <AdminRoute path="/admin/markers" component={AdminMarkers} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

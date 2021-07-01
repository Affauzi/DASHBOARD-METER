import React, { Component, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));
// const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/Dashboard"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              path="/"
              name="Default"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              path="/charts"
              name="charts"
              render={(props) => <Charts {...props} />}
            />
            {/* <Route
              path="/payment"
              name="charts"
              render={(props) => <Alerts {...props} />}
            /> */}
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;

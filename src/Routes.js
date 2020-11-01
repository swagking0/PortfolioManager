import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import About from "./Components/About/About";
import DatamanagerItemDetail from "./Components/DashboardItem/DatamanagerItem/DatamanagerItemDetail";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/datamanager/:id" component={DatamanagerItemDetail} />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

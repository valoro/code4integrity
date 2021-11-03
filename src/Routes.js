import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./screens/Home";
import { Bitcoin } from "./screens/Bitcoin";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/Bitcoin"} component={Bitcoin} />
          <Route path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;

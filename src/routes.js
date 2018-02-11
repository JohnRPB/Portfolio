import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './components/Home/HomePage';

// -------------------------
// Routes
// -------------------------

const Routes = ({ history }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;

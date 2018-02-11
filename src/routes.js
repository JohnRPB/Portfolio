import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/About';

// -------------------------
// Routes
// -------------------------

const Routes = ({ history }) => {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/about" component={AboutPage} />
      </Switch>
  );
};

export default Routes;

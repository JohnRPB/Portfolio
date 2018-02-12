import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePageHeading from './Home/HomePageHeading';
import AboutPageHeading from './About/AboutPageHeading';
import PortfolioHeading from './Portfolio/PortfolioHeading';

// -------------------------
// Routes
// -------------------------

const Routes = ({ history }) => {
  return (
      <Switch>
        <Route exact path="/" component={HomePageHeading} />
        <Route exact path="/about" component={AboutPageHeading} />
        <Route exact path="/portfolio" component={PortfolioHeading} />
      </Switch>
  );
};

export default Routes;

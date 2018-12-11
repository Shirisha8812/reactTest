import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

export default Main;

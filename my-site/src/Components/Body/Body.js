import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import Home from "./Home";

class Body extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact/">Contact</Link>

          <Link to="/resume/">Resume</Link>

          <Link to="/projects/">Projects</Link>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/resume/" component={Resume} />
        <Route path="/projects/" component={Projects} />
      </div>
    );
  }
}

export default Body;

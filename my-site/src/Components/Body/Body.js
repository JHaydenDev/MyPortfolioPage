import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';


class Body extends Component {
  render() {
    return (
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/resume/">Resume</Link>
            </li>
            <li>
              <Link to="/projects/">Projects</Link>
            </li>
          </ul>
        </nav>

        <Route path="/about" exact component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/resume/" component={Resume} />
        <Route path="/projects/" component={Projects} />
      </div>
    );
  }
}

export default Body;

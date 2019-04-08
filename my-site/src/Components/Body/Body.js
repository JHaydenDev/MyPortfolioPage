import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import Home from "./Home";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 2%;
`;

const LinkWrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

class Body extends Component {
  render() {
    return (
      <div>
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/about">About</StyledLink>

          <StyledLink to="/contact/">Contact</StyledLink>

          <StyledLink to="/resume/">Resume</StyledLink>

          <StyledLink to="/projects/">Projects</StyledLink>
        </LinkWrapper>

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

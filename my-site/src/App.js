import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';


const AppWrapper = styled.div`
text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Router>
          <Body />
        </Router>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

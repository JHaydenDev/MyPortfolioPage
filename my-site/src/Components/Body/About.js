import React, { Component } from 'react';
import styled from "styled-components";



const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
`;


class About extends Component {
  render() {
    return (
      <Wrapper>This is the About!!!</Wrapper>
    );
  }
}

export default About;

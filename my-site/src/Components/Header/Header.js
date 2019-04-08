import React, { Component } from "react";
import styled from "styled-components";


const TitleWrapper = styled.div`
  height:30%
`;

const Title = styled.h1`
  padding: 4%;
  margin-top: 0;
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
`;

class Header extends Component {
  render() {
    return (
      <TitleWrapper>
        <Title>Hayden Works</Title>
      </TitleWrapper>
    );
  }
}

export default Header;

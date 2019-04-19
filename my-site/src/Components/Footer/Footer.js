import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  position: absolute;
  bottom: 0;
  height: 10vh;
  @media (min-width: 1200px) {
    position: inherit;
  }
`;

const FooterContent = styled.div`
  padding: 1%;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <FooterContent>This is the Footer!!!</FooterContent>
      </Wrapper>
    );
  }
}

export default Footer;

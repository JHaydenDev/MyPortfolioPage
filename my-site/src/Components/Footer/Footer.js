import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 30%;
`;

const FooterContent = styled.div`
padding-top: 9%;
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

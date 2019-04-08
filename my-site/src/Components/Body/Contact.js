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


class Contact extends Component {
  render() {
    return (
      <Wrapper>This is the Contact!!!</Wrapper>
    );
  }
}

export default Contact;

import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.input`
  color: white;
  background: none;
  border-radius: 11px;
  width: 10vw;
  &:hover {
    color: aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
    border: aqua 1px solid;
  }
`;

const InputField = styled.input`
  border-radius: 11px;
  background: none;
  width: 12vw;
  color:white;
  }
`;

const InputWrapper = styled.label`
  width:100%;
  }
`;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <FormWrap>
          <form>
            <InputWrapper>
              Name:
              <InputField type="text" name="name"/>
            </InputWrapper>
            <InputWrapper>
              Email:
              <InputField type="text" name="email" />
            </InputWrapper>
            <SubmitButton type="submit" value="Submit" />
          </form>
        </FormWrap>
      </Wrapper>
    );
  }
}

export default Contact;

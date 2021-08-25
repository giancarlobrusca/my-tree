import React from "react";
import styled from "styled-components";

import { signIn } from "../auth/api";
import { CgTree } from "react-icons/cg";

const LoginScreen = ({ signIn, status }) => {
  function onSubmit(event) {
    event.preventDefault();

    signIn(event.target.email.value, event.target.password.value);
  }

  return (
    <Wrapper>
      <Logo>
        <CgTree />
      </Logo>
      <Title>
        MyTree by <strong>GianB</strong>
      </Title>
      <Slogan>(Sí, me gusta el rosa -o "deeppink"-)</Slogan>
      {status === "init" && <span>Intentando de restaurar sesión...</span>}
      {status === "restored" && (
        <Form onSubmit={onSubmit}>
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Registrarse</button>
        </Form>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  width: 200px;
  height: 200px;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: deeppink;
  }
`;

const Title = styled.h1`
  strong {
    color: deeppink;
  }
`;

const Slogan = styled.h2`
  font-size: 0.9rem;
  font-weight: 300;
  color: gray;

  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 300px;
    padding: 10px 20px;
    border: 1px solid gray;
    border-radius: 10px;

    &:focus {
      outline-offset: 3px;
      outline-color: deeppink;
      box-shadow: 0 0 10px deeppink;
    }
  }

  button {
    cursor: pointer;
    color: white;
    padding: 10px 20px;
    border: 2px solid transparent;
    border-radius: 10px;
    background-color: deeppink;

    &:focus {
      outline-offset: 3px;
      outline-color: deeppink;
    }

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export default LoginScreen;

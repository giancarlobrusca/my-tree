import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AvatarSrc from "./images/avatar.jpeg";
import { useColorMode } from "./context/ColorModeContext";
import { LinkButton, Footer } from "./components";

const App = () => {
  const { darkMode, toggleDarkMode } = useColorMode();

  return (
    <>
      <Main darkMode={darkMode}>
        <DarkModeButton onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </DarkModeButton>
        <Avatar src={AvatarSrc} alt="Avatar" />
        <LinkButton>Link a una red</LinkButton>
        <LinkButton>Link a otra red</LinkButton>
      </Main>
      <Footer>Made with a lot of 🧉 and a little bit of ☕️ too</Footer>
    </>
  );
};

const DarkModeButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  font-size: 1.5rem;

  border: none;

  background: transparent;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;

  border: 5px solid transparent;
  border-radius: 100%;

  box-shadow: 0 0px 9.7px rgba(0, 0, 0, 0.025),
    0 0px 23.4px rgba(0, 0, 0, 0.036), 0 0px 44.1px rgba(0, 0, 0, 0.045),
    0 0px 78.6px rgba(0, 0, 0, 0.054), 0 0px 147.1px rgba(0, 0, 0, 0.065),
    0 0px 352px rgba(0, 0, 0, 0.09);

  transition: border 0.2s ease-out;

  &:hover {
    border: 5px solid deeppink;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 100%;

  background-color: ${({ darkMode }) => (darkMode ? "#080808" : "white")};
`;

export default App;

import React from "react";
import styled from "styled-components";
import AvatarSrc from "./images/avatar.jpeg";
import { useColorMode } from "./context/ColorModeContext";
import { LinkButton, Footer } from "./components";
import userData from "../data.json";

const App = () => {
  const { darkMode, toggleDarkMode } = useColorMode();

  return (
    <>
      <Main darkMode={darkMode}>
        {/* <DarkModeButton onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </DarkModeButton> */}
        <Avatar src={AvatarSrc} alt="Avatar" />
        {userData.map((data) => {
          return (
            <>
              <Bio>{data.bio}</Bio>
              <SocialLinks>
                {data.links.map((link) => (
                  <LinkButton network={link.social} href={link.link} />
                ))}
              </SocialLinks>
              <CustomLinks length={data.customLinks.length}>
                {data.customLinks.map((clink) => (
                  <LinkButton href={clink.link}>{clink.text}</LinkButton>
                ))}
              </CustomLinks>
            </>
          );
        })}
      </Main>
      <Footer>Proyecto realizado con mucho 🧉 y un poco de ☕️ también</Footer>
    </>
  );
};

const Bio = styled.p`
  text-align: center;
  max-width: 1000px;
`;

const CustomLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: ${(p) => (p.length > 5 ? "350px" : "fit-content")};
  overflow: auto;
  box-shadow: ${(p) =>
    p.length > 6 ? "inset 0 0 10px rgba(0, 0, 0, 0.2)" : "none"};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

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

  margin-top: 20px;
  border: 5px solid transparent;
  border-radius: 100%;

  box-shadow: 0 0px 9.7px rgba(0, 0, 0, 0.025),
    0 0px 23.4px rgba(0, 0, 0, 0.036), 0 0px 44.1px rgba(0, 0, 0, 0.045),
    0 0px 78.6px rgba(0, 0, 0, 0.054), 0 0px 147.1px rgba(0, 0, 0, 0.065),
    0 0px 352px rgba(0, 0, 0, 0.09);

  transition: border 0.2s ease-out;

  &:hover {
    border: 5px solid deeppink;
    box-shadow: 0 0px 10px deeppink;
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

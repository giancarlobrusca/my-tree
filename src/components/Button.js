import styled from "styled-components";
import { useColorMode } from "../context/ColorModeContext";

export const LinkButton = ({ children }) => {
  const { darkMode } = useColorMode();

  return <StyledButton darkMode={darkMode}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  cursor: pointer;

  color: ${({ darkMode }) => (darkMode ? "white" : "inherit")};
  font-weight: bold;

  width: 800px;
  padding: 10px 0;

  border: none;

  background-color: transparent;
  box-shadow: ${({ darkMode }) =>
    darkMode ? "0 0 10px -5px deeppink" : "0 0 17px rgba(0, 0, 0, 0.15)"};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: deeppink;
    box-shadow: 0 0px 10px deeppink;
  }
`;

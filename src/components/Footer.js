import styled from "styled-components";
import { useColorMode } from "../context/ColorModeContext";

export const Footer = ({ className, children }) => {
  const { darkMode } = useColorMode();

  return (
    <StyledFooter darkMode={darkMode} className={className}>
      {children}
    </StyledFooter>
  );
};

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 10px 0;

  color: ${({ darkMode }) => (darkMode ? "white" : "inherit")};
  text-align: center;

  background-color: ${({ darkMode }) => (darkMode ? "#080808" : "white")};
  box-shadow: ${({ darkMode }) =>
    darkMode ? "0 0 10px -5px deeppink" : "0 0 17px rgba(0, 0, 0, 0.15)"};
`;

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
  padding: 20px 0;

  color: ${({ darkMode }) => (darkMode ? "white" : "inherit")};
  text-align: center;

  background-color: ${({ darkMode }) => (darkMode ? "#080808" : "white")};
`;

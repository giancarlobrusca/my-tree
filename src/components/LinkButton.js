import styled from "styled-components";
import { useColorMode } from "../context/ColorModeContext";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function renderSocialIcon(network) {
  switch (network) {
    case "GitHub":
      return <FaGithub />;
    case "LinkedIn":
      return <FaLinkedin />;
    case "Instagram":
      return <FaInstagram />;
    case "Twitter":
      return <FaTwitter />;
    default:
      throw Error(`${network} is not a valid Social Network.`);
  }
}

export const LinkButton = ({ href, network, children }) => {
  const { darkMode } = useColorMode();

  return (
    <a href={href} target="_blank">
      <StyledButton darkMode={darkMode} network={!network}>
        {network && <span>{renderSocialIcon(network)}</span>}
        {!network && children}
      </StyledButton>
    </a>
  );
};

const StyledButton = styled.button`
  cursor: pointer;

  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  font-weight: bold;

  width: ${(p) => (p.network ? "500px" : "fit-content")};
  text-align: center;
  padding: ${(p) => (p.network ? "10px" : "10px 10px")};

  border: none;
  border-radius: 20px;

  background-color: transparent;
  box-shadow: ${({ darkMode }) =>
    darkMode ? "0 0 10px -5px deeppink" : "0 0 17px rgba(0, 0, 0, 0.15)"};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: deeppink;
    box-shadow: 0 0 10px deeppink;
  }
`;

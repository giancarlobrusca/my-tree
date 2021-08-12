import React from "react";

const ColorModeContext = React.createContext();

export const ColorModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ColorModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export function useColorMode() {
  const context = React.useContext(ColorModeContext);
  console.log("context", context);
  return context;
}

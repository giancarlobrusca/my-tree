import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { ColorModeProvider } from "./src/context/ColorModeContext";

ReactDOM.render(
  <ColorModeProvider>
    <App />
  </ColorModeProvider>,
  document.getElementById("root")
);

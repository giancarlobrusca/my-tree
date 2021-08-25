import React from "react";
import ReactDOM from "react-dom";

import App from "./src/App";

import { AuthProvider } from "./src/auth/AuthContext";
import { ColorModeProvider } from "./src/context/ColorModeContext";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ColorModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

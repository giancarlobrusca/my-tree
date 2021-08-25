import React from "react";

import auth from "./api";
import Login from "../pages/Login";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState("init");

  React.useEffect(() => {
    auth.onChange((user) => {
      setUser(user);

      setStatus("restored");
    });
  }, []);

  if (!user) return <Login signIn={auth.signIn} status={status} />;

  const state = { user };
  const actions = { signOut: auth.signOut, signIn: auth.signIn };

  return (
    <AuthContext.Provider value={{ state, actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext as default };

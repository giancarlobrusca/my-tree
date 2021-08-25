import React from "react";

import AuthContext from "./AuthContext";

export function useUser() {
  const {
    state: { user },
  } = React.useContext(AuthContext);

  return user;
}

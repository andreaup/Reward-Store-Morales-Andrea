import React, { useState } from "react";
import { initialState, AppContext } from "./User";


export default function User({ children }) {
  const [user, setUser] = useState(initialState);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

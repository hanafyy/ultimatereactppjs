import { createContext, useState } from "react";

const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "john doe" });

  const updateUser = (name) => {
    setUser({ name: name });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

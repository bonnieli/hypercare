import React, { createContext, useState, SetStateAction } from "react";
import { User } from "../schemas/user";

interface UsersContextValue {
  users: User[];
  setUsers: React.Dispatch<SetStateAction<User[]>>;
}

const initialContextValue: UsersContextValue = {
  users: [],
  setUsers: () => {},
};

const UsersContext = createContext<UsersContextValue>(initialContextValue);

interface UsersProviderProps {
  children: React.ReactNode;
}

const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };

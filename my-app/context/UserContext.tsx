"use client";

import { createContext, useContext, ReactNode } from "react";
import useLocalStorage from "@/components/saveData/useLocalStorage";

interface UserContextType {
  username: string;
  nickName: string;
  setUsernameProvider: (name: string) => void;
  setNickNameProvider: (nickname: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  // Use o useLocalStorage para gerenciar o estado
  const [username, setUsername] = useLocalStorage("username", "");
  const [nickName, setNickname] = useLocalStorage("nickName", "");

  const setUsernameProvider = (name: string) => {
    setUsername(name);
  };

  const setNickNameProvider = (nickname: string) => {
    setNickname(nickname);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        nickName,
        setUsernameProvider,
        setNickNameProvider,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

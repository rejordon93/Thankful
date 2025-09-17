"use client";
import React, { createContext, useContext, ReactNode, useReducer } from "react";
import usersReducer, {
  Action,
  UserState,
  AUTH_INITIAL_STATE,
} from "@/context/usersReducer";

// Define the shape of our context
interface UserContextType {
  usersState: UserState;
  usersDispatch: React.Dispatch<Action>;
}

// Create the context
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type AppProviderProps = {
  children: ReactNode;
};

// Provider component
export const AppProvider = ({ children }: AppProviderProps) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    AUTH_INITIAL_STATE
  );

  return (
    <UserContext.Provider value={{ usersState, usersDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for consuming the context
export function useAuthContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AppProvider");
  }
  return context;
}

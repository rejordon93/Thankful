"use client";
import React, { createContext, useContext, ReactNode, useReducer } from "react";
import usersReducer, {
  Action,
  UserState,
  AUTH_INITIAL_STATE,
} from "@/context/usersReducer";
import profileReducer, {
  ProfileAction,
  ProfileState,
  PROFILE_INITIAL_STATE,
} from "./profileReducer";

// Define the shape of our context
interface UserContextType {
  usersState: UserState;
  usersDispatch: React.Dispatch<Action>;
}

interface ProfileContextType {
  profileState: ProfileState;
  profileDispatch: React.Dispatch<ProfileAction>;
}

// Create the context
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
export const ProfileContext = createContext<ProfileContextType | undefined>(
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
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    PROFILE_INITIAL_STATE
  );

  return (
    <UserContext.Provider value={{ usersState, usersDispatch }}>
      <ProfileContext.Provider value={{ profileState, profileDispatch }}>
        {children}
      </ProfileContext.Provider>
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

export function useProfileContext() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within an AppProvider");
  }
  return context;
}

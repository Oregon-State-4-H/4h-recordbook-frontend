"use client";

import React, { createContext, useContext, useState } from "react";

export interface UserProp {
  currUserJwt: string;
  updateUser: (values: string) => void;
}

export const userContextDefaultProp: UserProp = {
  currUserJwt: "",
  updateUser: () => {},
};

export const UserContext = createContext<UserProp>(userContextDefaultProp);

export function useUser() {
  return useContext(UserContext);
}

type Props = {
  children: React.ReactNode;
};

export function UserProvider({ children }: Props) {
  const [currUserContext, setCurrUserContext] = useState<string>("");

  const update = (updatedUserJwt: string) => {
    setCurrUserContext(updatedUserJwt);
  };

  const value: UserProp = {
    currUserJwt: currUserContext,
    updateUser: update,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

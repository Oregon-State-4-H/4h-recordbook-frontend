"use client";

import React, { createContext, useContext, useState } from "react";

export interface NavbarLink {
  label: string;
  href: string;
  linkIcon: string;
}

export const navbarLandingLinks: NavbarLink[] = [
  // {
  //   label: "Sign Up / Sign In",
  //   href: "/Auth",
  //   linkIcon: "none",
  // },
  {
    label: "Sign Up / Sign In",
    href: "/dummySignIn",
    linkIcon: "none",
  },
  {
    label: "Docs",
    href: "https://record-books-docs.vercel.app/",
    linkIcon: "none",
  },
  {
    label: "Contact Us",
    href: "#contactSection",
    linkIcon: "none",
  },
  {
    label: "Meet the Team",
    href: "#teamSection",
    linkIcon: "none",
  },
  {
    label: "About",
    href: "#aboutSection",
    linkIcon: "none",
  },
];

export interface NavbarValues {
  mobileTitle: string;
  desktopTitle: string;
  hrefTitle: string;
  mobileTopIcon: string;
  NavbarLinks: NavbarLink[];
}

export interface NavbarProp {
  currNavbarValues: NavbarValues;
  updateFunction: (values: NavbarValues) => void;
}

export const navbarContextDefaultValues: NavbarValues = {
  mobileTitle: "",
  desktopTitle: "",
  hrefTitle: "",
  mobileTopIcon: "",
  NavbarLinks: [],
};

export const navbarContextDefaultProp: NavbarProp = {
  currNavbarValues: navbarContextDefaultValues,
  updateFunction: () => {},
};

export const NavbarContext = createContext<NavbarProp>(
  navbarContextDefaultProp
);

export function useNavbar() {
  return useContext(NavbarContext);
}

type Props = {
  children: React.ReactNode;
};

export function NavbarProvider({ children }: Props) {
  const [currNavbarContext, setCurrNavbarContext] = useState<NavbarValues>(
    navbarContextDefaultValues
  );

  const update = (updatedNavBarValues: NavbarValues) => {
    setCurrNavbarContext(updatedNavBarValues);
  };

  const value: NavbarProp = {
    currNavbarValues: currNavbarContext,
    updateFunction: update,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
}

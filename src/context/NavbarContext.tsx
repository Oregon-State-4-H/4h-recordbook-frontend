"use client";

import React, { createContext, useContext, useState } from "react";

export interface NavbarLink {
  label: string;
  href: string;
}

export const navbarLandingLinks: NavbarLink[] = [
  {
    label: "About",
    href: "#aboutSection",
  },
  {
    label: "Meet the Team",
    href: "#teamSection",
  },
  {
    label: "Contact Us",
    href: "#contactSection",
  },
  {
    label: "Docs",
    href: "https://record-books-docs.vercel.app/",
  },
];

export const navbarAppLinks: NavbarLink[] = [
  {
    label: "Home",
    href: "/Dashboard",
  },
  {
    label: "4-H Resume",
    href: "/Dashboard/Resume",
  },
  {
    label: "My Projects",
    href: "/Dashboard/Projects",
  },
  {
    label: "Account",
    href: "/Dashboard/Account",
  },
];

export interface NavbarValues {
  mobileTitle: string;
  desktopTitle: string;
  hrefTitle: string;
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

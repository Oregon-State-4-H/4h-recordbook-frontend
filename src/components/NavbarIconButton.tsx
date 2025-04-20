"use client";

import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavbarLink } from "@/context/NavbarContext";

interface NavbarIconButtonProps {
  item: NavbarLink;
}

export default function NavbarIconButton({ item }: NavbarIconButtonProps) {
  switch (item.label) {
    case "Home":
      return (
        <BottomNavigationAction
          href={item.href}
          label={item.label}
          sx={{
            textAlign: "center",
            color: "white",
            display: "block",
          }}
          icon={<HomeIcon />}
        />
      );
    case "4-H Resume":
      return (
        <BottomNavigationAction
          href={item.href}
          label={item.label}
          sx={{
            textAlign: "center",
            color: "white",
            display: "block",
          }}
          icon={<DescriptionIcon />}
        />
      );
    case "My Projects":
      return (
        <BottomNavigationAction
          href={item.href}
          label={item.label}
          sx={{
            textAlign: "center",
            color: "white",
            display: "block",
          }}
          icon={<ContentPasteIcon />}
        />
      );
    case "Account":
      return (
        <BottomNavigationAction
          href={item.href}
          label={item.label}
          sx={{
            textAlign: "center",
            color: "white",
            display: "block",
          }}
          icon={<AccountCircleIcon />}
        />
      );
    default:
      return (
        <BottomNavigationAction
          href={item.href}
          label={item.label}
          sx={{
            textAlign: "center",
            color: "white",
            display: "block",
          }}
        />
      );
  }
}

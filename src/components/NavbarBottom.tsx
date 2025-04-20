"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import NavbarIconButton from "./NavbarIconButton";
import { useNavbar } from "@/context/NavbarContext";

export default function NavbarBottom() {
  const { currNavbarValues } = useNavbar();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      sx={{
        display: { xs: "flex", sm: "flex", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      {currNavbarValues.NavbarLinks.map((item, index) => (
        <NavbarIconButton item={item} key={index} />
      ))}
    </BottomNavigation>
  );
}

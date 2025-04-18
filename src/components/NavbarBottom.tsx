import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavbar } from "@/context/NavbarContext";

export default function NavbarBottom() {
  const { currNavbarValues } = useNavbar();

  return (
    <BottomNavigation
      sx={{
        display: { xs: "flex", sm: "flex", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        flexDirection: "row-reverse",
      }}
      showLabels
    >
      {currNavbarValues.NavbarLinks.map((item, index) => (
        <BottomNavigationAction
          href={item.href}
          label={item.label}
          key={index}
          sx={{
            textAlign: "center",
            my: 1,
            color: "white",
            display: "block",
          }}
        />
      ))}
    </BottomNavigation>
  );
}

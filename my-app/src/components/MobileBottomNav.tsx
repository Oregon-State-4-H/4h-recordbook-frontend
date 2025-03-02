import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Paper from "@mui/material/Paper";

function MobileBottomNav() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        showLabels
      >
        <BottomNavigationAction
          href="/Dashboard"
          label="Dashboard"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          href="/Dashboard/Resume"
          label="Resume"
          icon={<DescriptionIcon />}
        />
        <BottomNavigationAction
          href="/Dashboard/Projects"
          label="Projects"
          icon={<ContentPasteIcon />}
        />
        <BottomNavigationAction
          href="/Dashboard/Account"
          label="Account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
export default MobileBottomNav;

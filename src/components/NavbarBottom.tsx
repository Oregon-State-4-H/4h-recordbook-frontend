"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import BottomNavigation from "@mui/material/BottomNavigation";
import { useNavbar } from "@/context/NavbarContext";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useUser } from "@auth0/nextjs-auth0";

export default function NavbarBottom() {
  const { currNavbarValues } = useNavbar();
  const [value, setValue] = React.useState(0);
  const { user } = useUser();
  const router = useRouter();

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
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      showLabels
    >
      {currNavbarValues.NavbarLinks.map((item, index) => {
        if (item.label == "Home") {
          return (
            <BottomNavigationAction
              key={index}
              onClick={() => router.push(item.href)}
              label={item.label}
              sx={{
                textAlign: "center",
                color: "white",
              }}
              icon={<HomeIcon />}
            />
          );
        } else if (item.label == "4-H Resume") {
          return (
            <BottomNavigationAction
              key={index}
              onClick={() => router.push(item.href)}
              label={item.label}
              sx={{
                textAlign: "center",
                color: "white",
              }}
              icon={<DescriptionIcon />}
            />
          );
        } else if (item.label == "My Projects") {
          return (
            <BottomNavigationAction
              key={index}
              onClick={() => router.push(item.href)}
              label={item.label}
              sx={{
                textAlign: "center",
                color: "white",
              }}
              icon={<ContentPasteIcon />}
            />
          );
        } else if (item.label == "Account") {
          return (
            <BottomNavigationAction
              key={index}
              onClick={() => router.push(item.href)}
              label={item.label}
              sx={{
                textAlign: "center",
                color: "white",
              }}
              icon={<AccountCircleIcon />}
            />
          );
        } else {
          return (
            <BottomNavigationAction
              key={index}
              onClick={() => router.push(item.href)}
              label={item.label}
              sx={{
                textAlign: "center",
                color: "white",
              }}
            />
          );
        }
      })}
      {user &&
        currNavbarValues.hrefTitle == "/" &&
        currNavbarValues.mobileTitle == "4-H Record Books" && (
          <BottomNavigationAction
            onClick={() => router.push("/Dashboard")}
            label="Dashboard"
            sx={{
              textAlign: "center",
              color: "white",
            }}
          />
        )}
      {!user &&
        currNavbarValues.hrefTitle == "/" &&
        currNavbarValues.mobileTitle == "4-H Record Books" && (
          <BottomNavigationAction
            href="/auth/login"
            label="Sign Up/Sign In"
            sx={{
              textAlign: "center",
              color: "white",
            }}
          />
        )}
    </BottomNavigation>
  );
}

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavbar } from "@/context/NavbarContext";
import { useUser } from "@auth0/nextjs-auth0";

export default function NavbarTop() {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  const { currNavbarValues } = useNavbar();
  const { user } = useUser();
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => router.push(currNavbarValues.hrefTitle)}
              sx={{
                mr: 2,
                display: { xs: "none", sm: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              4-H Record Books
            </Typography>

            <Stack
              direction="row"
              sx={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                display: { xs: "flex", sm: "flex", md: "none" },
              }}
            >
              {/* <BackButton /> */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "7vw",
                    textAlign: "center",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  {currNavbarValues.mobileTitle}
                </Typography>
                {currNavbarValues.desktopTitle.includes("Project") && (
                  <ContentPasteIcon />
                )}
                {currNavbarValues.desktopTitle.includes("Resume") && (
                  <DescriptionIcon />
                )}
              </Stack>
            </Stack>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "none",
                  md: "flex",
                  // flexDirection: "row-reverse",
                  justifyContent: "flex-end",
                },
              }}
            >
              {currNavbarValues.NavbarLinks.map((item, index) => (
                <Button
                  onClick={() => router.push(item.href)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  key={index}
                >
                  {item.label}
                </Button>
              ))}
              {user && currNavbarValues.mobileTitle == "4-H Record Books" && (
                <Button
                  key={currNavbarValues.NavbarLinks.length + 1}
                  onClick={() => router.push("/Dashboard")}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant="outlined"
                >
                  Go To Dashboard
                </Button>
              )}
              {!user && currNavbarValues.mobileTitle == "4-H Record Books" && (
                <Button
                  key={currNavbarValues.NavbarLinks.length + 1}
                  href="/auth/login"
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant="outlined"
                >
                  Sign Up/Sign In
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

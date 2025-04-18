"use client";

import * as React from "react";
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

export default function NavbarTop() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { currNavbarValues } = useNavbar();

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
              href={currNavbarValues.hrefTitle}
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
              {currNavbarValues.desktopTitle}
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
                  flexDirection: "row-reverse",
                },
              }}
            >
              {currNavbarValues.NavbarLinks.map((item, index) => (
                <Button
                  href={item.href}
                  sx={{ my: 2, color: "white", display: "block" }}
                  key={index}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

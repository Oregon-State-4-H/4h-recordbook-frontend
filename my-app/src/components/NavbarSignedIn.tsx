import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import BackButton from "./BackButton";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DescriptionIcon from "@mui/icons-material/Description";
import { useRouter } from "next/router";

function ResponsiveAppBar() {
  const router = useRouter();

  var mobileTitle;

  if (router.asPath.includes("/Projects/All")) {
    mobileTitle = "All";
  } else if (router.asPath.includes("/Projects/")) {
    if (
      router.asPath
        .substring(
          router.asPath.lastIndexOf("/Projects/") + "/Projects/".length,
          router.asPath.lastIndexOf("/") - 1
        )
        .includes("/")
    ) {
      mobileTitle = router.asPath.substring(router.asPath.lastIndexOf("/") + 1);
    } else {
      mobileTitle = "My Project";
    }
  } else if (router.asPath.includes("/Projects")) {
    mobileTitle = "Current";
  } else {
    mobileTitle = router.asPath
      .replace("/Dashboard/", "")
      .replace("/", " ")
      .replace("/", " ")
      .replace("Resume Section", "Section");
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  return (
    <AppBar
      position="sticky"
      sx={
        {
          // zIndex: 99999,
        }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
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
              display: { xs: "flex", md: "none" },
            }}
          >
            <BackButton />
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
                {mobileTitle}
              </Typography>
              {router.asPath.includes("Project") && <ContentPasteIcon />}
              {router.asPath.includes("Resume") && <DescriptionIcon />}
            </Stack>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", flexDirection: "row-reverse", md: "flex" },
            }}
          >
            <Button
              href="/Dashboard/Account"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Account
            </Button>
            <Button
              href="/Dashboard/Projects"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Projects
            </Button>
            <Button
              href="/Dashboard/Resume"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              4-H Resume
            </Button>
            <Button
              href="/Dashboard"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

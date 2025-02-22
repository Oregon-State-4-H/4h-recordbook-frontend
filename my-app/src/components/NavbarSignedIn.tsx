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
import BackButton from "./BackButton";
import { useRouter } from "next/router";

function ResponsiveAppBar() {
  const router = useRouter();
  const pathname = router.pathname.replace("/Dashboard/", "").replace("/", "");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <BackButton />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "7vw",
            }}
          >
            {pathname}
          </Typography>
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

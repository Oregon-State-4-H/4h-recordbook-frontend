// Component adapted from: https://mui.com/material-ui/react-app-bar/#system-ResponsiveAppBar.js

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" top="0">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Dashboard"
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
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              style={{ background: "" }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem style={{ padding: "0px" }}>
                <a
                  style={{
                    width: "100%",
                    padding: "0px .5em 0px .5em",
                    textDecoration: "none",
                  }}
                  href="/Dashboard"
                  sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </a>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem style={{ padding: "0px" }}>
                <a
                  style={{
                    width: "100%",
                    padding: "0px .5em 0px .5em",
                    textDecoration: "none",
                  }}
                  href="/Resume"
                  sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    4-H Resume
                  </Typography>
                </a>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem style={{ padding: "0px" }}>
                <a
                  style={{
                    width: "100%",
                    padding: "0px .5em 0px .5em",
                    textDecoration: "none",
                  }}
                  href="/Projects"
                  sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    My Projects
                  </Typography>
                </a>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem style={{ padding: "0px" }}>
                <a
                  style={{
                    width: "100%",
                    padding: "0px .5em 0px .5em",
                    textDecoration: "none",
                  }}
                  href="/Account"
                  sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>Account</Typography>
                </a>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Dashboard"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            4-H Record Books
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", flexDirection: "row-reverse", md: "flex" },
            }}
          >
            <Button
              href="/Account"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Account
            </Button>
            <Button
              href="/Projects"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Projects
            </Button>
            <Button
              href="/Resume"
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
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

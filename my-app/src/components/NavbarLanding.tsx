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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Divider from "@mui/material/Divider";

function ResponsiveAppBar() {
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
      position="static"
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
                  href="#aboutSection"
                  // sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>About</Typography>
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
                  href="#teamSection"
                  // sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    Meet the Team
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
                  href="#contactSection"
                  // sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    Contact Us
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
                  href="https://record-books-docs.vercel.app/"
                  // sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>Docs</Typography>
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
                  href="/Auth"
                  // sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    Sign Up/Sign In
                  </Typography>
                </a>
              </MenuItem>
            </Menu>
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
            }}
          >
            4-H Record Books
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              href="/Auth"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Sign Up/Sign In
            </Button>
            <Button
              href="https://record-books-docs.vercel.app/"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Docs
            </Button>
            <Button
              href="#contactSection"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact Us
            </Button>
            <Button
              href="#teamSection"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Meet the Team
            </Button>
            <Button
              href="#aboutSection"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

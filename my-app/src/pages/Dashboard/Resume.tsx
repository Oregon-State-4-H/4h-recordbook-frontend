import NavBarSignedIn from "../../components/NavbarSignedIn";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MobileBottomNav from "../../components/MobileBottomNav";

function Projects() {
  return (
    <Box className="App">
      <NavBarSignedIn />
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("xs")]: { height: "30px" },
          [theme.breakpoints.up("sm")]: { height: "35px" },
          [theme.breakpoints.up("md")]: { height: "40px" },
          [theme.breakpoints.up("lg")]: { height: "45px" },
          [theme.breakpoints.up("xl")]: { height: "50px" },
        })}
      ></Box>
      <Typography
        variant="h4"
        sx={{
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          marginBotton: "20px",
        }}
      >
        My Resume
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
        }}
      ></Typography>
      <MobileBottomNav />
    </Box>
  );
}

export default Projects;

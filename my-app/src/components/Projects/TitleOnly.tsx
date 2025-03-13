import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBarSignedIn from "../NavbarSignedIn";
import MobileBottomNav from "../MobileBottomNav";
import CloverLoader from "../CloverLoader";

interface TitleOnlyProps {
  title: string;
  cloverLoader: boolean;
}

export default function NotFound({ title, cloverLoader }: TitleOnlyProps) {
  return (
    <Box className="App">
      <NavBarSignedIn />

      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("xs")]: { height: "20px" },
          [theme.breakpoints.up("sm")]: { height: "25px" },
          [theme.breakpoints.up("md")]: { height: "30px" },
          [theme.breakpoints.up("lg")]: { height: "35px" },
          [theme.breakpoints.up("xl")]: { height: "40px" },
        })}
      ></Box>

      <Typography
        variant="h4"
        sx={{
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      {cloverLoader && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CloverLoader />
        </Box>
      )}

      <MobileBottomNav />
    </Box>
  );
}

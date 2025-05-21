import React from "react";
import Box from "@mui/material/Box";
import CloverLoader from "@/components/CloverLoader";

export default function NotFound() {
  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <CloverLoader />
    </Box>
  );
}

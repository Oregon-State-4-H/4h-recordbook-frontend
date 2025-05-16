"use client";

import React from "react";
import { BookmarkHeader } from "@/components/Bookmarks";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavbar } from "@/context/NavbarContext";

export default function SignedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currNavbarValues, updateFunction } = useNavbar();

  return (
    <Box>
      <BookmarkHeader />
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "block" },
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {currNavbarValues.desktopTitle}
      </Typography>
      {children}
    </Box>
  );
}

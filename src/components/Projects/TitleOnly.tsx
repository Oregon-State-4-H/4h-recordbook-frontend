import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CloverLoader from "@/components/CloverLoader";
import {
  useNavbar,
  NavbarValues,
  navbarAppLinks,
} from "@/context/NavbarContext";
import { useBookmark } from "@/context/BookmarkContext";

interface TitleOnlyProps {
  title: string;
  cloverLoader: boolean;
}

export default function NotFound({ title, cloverLoader }: TitleOnlyProps) {
  const { currNavbarValues, updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();

  useEffect(() => {
    var navbarContextPageValues: NavbarValues = {
      mobileTitle: title,
      desktopTitle: title,
      hrefTitle: "/Dashboard",
      mobileTopIcon: "none",
      NavbarLinks: navbarAppLinks,
    };
    updateFunction(navbarContextPageValues);
  }, []);

  return (
    <Box className="App">
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
    </Box>
  );
}

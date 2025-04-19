"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { dummySignIn } from "@/API/UserAPI";
import { useNavbar, NavbarValues } from "@/context/NavbarContext";
import { useUser } from "@/context/UserContext";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function DummySignIn() {
  // update context for nav/app bars
  const { updateFunction } = useNavbar();
  const { currUserJwt, updateUser } = useUser();

  useEffect(() => {
    var navbarContextPageValues: NavbarValues = {
      mobileTitle: "4-H Record Books",
      desktopTitle: "4-H Record Books",
      hrefTitle: "/",
      mobileTopIcon: "none",
      NavbarLinks: [],
      Bookmarks: [],
    };

    updateFunction(navbarContextPageValues);
  }, []);

  const [mapState, setMapState] = useState(new Map());
  const updateMap = (key: string, value: any) => {
    setMapState((map) => new Map(map.set(key, value)));
  };

  useEffect(() => {
    updateMap("id", "1");
    const getJwt = async () => {
      try {
        const dummyJwt = await dummySignIn(
          JSON.stringify(Object.fromEntries(mapState))
        );
        updateUser(dummyJwt);
      } catch (error) {
        console.error(error);
      }
    };
    getJwt();
  }, []);

  return (
    <Box className="App">
      <Typography variant="h1" gutterBottom>
        Dummy Sign In Page
      </Typography>

      <Typography variant="body1" gutterBottom>
        JWT stored in Context:
      </Typography>
      <Typography variant="body2" gutterBottom>
        {currUserJwt}
      </Typography>

      <Button href="/Dashboard" variant="contained">
        To Signed In Pages
      </Button>
    </Box>
  );
}

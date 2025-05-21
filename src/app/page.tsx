"use client";

import React, { useEffect, useRef } from "react";
import IntroBanner from "@/components/Landing/IntroBanner";
import IntroAbout from "@/components/Landing/IntroAbout";
import IntroTeam from "@/components/Landing/IntroTeam";
import IntroContact from "@/components/Landing/IntroContact";
import Box from "@mui/material/Box";
import {
  useNavbar,
  NavbarValues,
  navbarLandingLinks,
} from "@/context/NavbarContext";

export default function Home() {
  // update context for nav/app bars
  const hasRun = useRef(false);
  const { updateFunction } = useNavbar();
  useEffect(() => {
    if (!hasRun.current) {
      const navbarContextPageValues: NavbarValues = {
        mobileTitle: "4-H Record Books",
        desktopTitle: "4-H Record Books",
        hrefTitle: "/",
        mobileTopIcon: "none",
        NavbarLinks: navbarLandingLinks,
      };

      updateFunction(navbarContextPageValues);
      hasRun.current = true;
    }
  }, [updateFunction]);

  return (
    <Box className="App">
      <IntroBanner />
      <IntroAbout />
      <IntroTeam />
      <IntroContact />
    </Box>
  );
}

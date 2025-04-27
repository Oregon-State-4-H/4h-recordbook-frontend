"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // update context for nav/app bars
  const { currNavbarValues, updateFunction } = useNavbar();
  useEffect(() => {
    var navbarContextPageValues: NavbarValues = {
      mobileTitle: "4-H Record Books",
      desktopTitle: "4-H Record Books",
      hrefTitle: "/",
      mobileTopIcon: "none",
      NavbarLinks: navbarLandingLinks,
    };

    updateFunction(navbarContextPageValues);
    console.log();
  }, []);

  return (
    <Box className="App">
      <IntroBanner />
      <IntroAbout />
      <IntroTeam />
      <IntroContact />
    </Box>
  );
}

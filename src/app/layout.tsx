"use client";

import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import NavbarTop from "@/components/NavbarTop";
import NavbarBottom from "@/components/NavbarBottom";
import { createContext, useContext, useState } from "react";
import { NavbarProvider } from "@/context/NavbarContext";
import { UserProvider } from "@/context/UserContext";
import Box from "@mui/material/Box";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UserProvider>
              <NavbarProvider>
                <NavbarTop />
                <Box
                  sx={(theme) => ({
                    [theme.breakpoints.up("xs")]: { height: "45px" },
                    [theme.breakpoints.up("sm")]: { height: "45px" },
                    [theme.breakpoints.up("md")]: { height: "50px" },
                    [theme.breakpoints.up("lg")]: { height: "50px" },
                    [theme.breakpoints.up("xl")]: { height: "50px" },
                  })}
                ></Box>
                {children}
                <NavbarBottom />
              </NavbarProvider>
            </UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

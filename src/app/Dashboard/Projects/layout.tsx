"use client";

import React from "react";
import Box from "@mui/material/Box";

export default function SignedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box>{children}</Box>;
}

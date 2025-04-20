"use client";

import React, { useEffect, useState } from "react";
import { getAccessToken } from "@auth0/nextjs-auth0";
import Box from "@mui/material/Box";

export default function SignedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box>{children}</Box>;
}

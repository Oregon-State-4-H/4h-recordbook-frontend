"use client";

import React, { useEffect, useState } from "react";
import { DashboardBookmarkHeader } from "@/components/Bookmarks";
import { Bookmark, fetchAllBookmarks } from "@/API/BookmarkAPI";
import { getAccessToken } from "@auth0/nextjs-auth0"

import Box from "@mui/material/Box";

export default function SignedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const token = await getAccessToken();
        setAccessToken(token);
        const bookmarks = await fetchAllBookmarks(token);
        setBookmarks(bookmarks);
      } catch (error) {
        console.error(error);
      }
    };
    getBookmarks();

  }, []);

  return (
    <Box>
      <DashboardBookmarkHeader
        jwt={accessToken}
        bookmarks={bookmarks}
        setDashboardBookmarks={setBookmarks}
      />
      {children}
    </Box>
  );
}

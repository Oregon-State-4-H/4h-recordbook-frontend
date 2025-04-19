"use client";

import React, { useEffect, useState } from "react";
import { DashboardBookmarkHeader } from "@/components/Bookmarks";
import { Bookmark, fetchAllBookmarks } from "@/API/BookmarkAPI";
import { useUser } from "@/context/UserContext";

import Box from "@mui/material/Box";

export default function SignedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currUserJwt, updateUser } = useUser();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const bookmarks = await fetchAllBookmarks(currUserJwt);
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
        bookmarks={bookmarks}
        setDashboardBookmarks={setBookmarks}
      />
      {children}
    </Box>
  );
}

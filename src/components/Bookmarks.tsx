"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { getAccessToken } from "@auth0/nextjs-auth0";
import Box from "@mui/material/Box";
import {
  CustomBookmarkFields,
  deleteBookmark,
  fetchAllBookmarks,
  postBookmark,
} from "@/API/BookmarkAPI";
import { useBookmark } from "@/context/BookmarkContext";

import IconButton from "@mui/material/IconButton";

export function BookmarkButton() {
  const { currBookmarkValues, populated, reloaded, updateBookmarks } =
    useBookmark();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const pathname = usePathname().substring(1);

  // if bookmarks context is not populated, send request to backend
  useEffect(() => {
    if (populated == false) {
      const getBookmarks = async () => {
        try {
          const token = await getAccessToken();
          setAccessToken(token);
          const bookmarks = await fetchAllBookmarks(token);
          updateBookmarks(bookmarks);
          // console.log("populated: ", populated);
        } catch (error) {
          console.error(error);
        }
      };
      getBookmarks();
    }
  });

  // check if curr page is bookmarked if bookmarks context is populated
  useEffect(() => {
    if (populated == true) {
      // update if the bookmarks icon should be filled in or not
      setIsBookmarked(
        currBookmarkValues.find((b) => b.link === pathname) ? true : false
      );

      // set reloaded context variable to false, since pages can toggle it
      // to true to trigger the useEffect to rerender for soft navigation
      updateBookmarks(false);

      console.log(currBookmarkValues);
      console.log("populated: ", populated);
    }
  }, [populated, reloaded, currBookmarkValues, pathname, updateBookmarks]);

  const handleBookmarkToggle = async () => {
    if (isBookmarked) {
      if (!confirm("Are you sure you want to remove this bookmark?")) {
        return;
      }
      let bookmarkID: string = "";
      const currBookmark = currBookmarkValues.find(
        (element) => element.link == pathname
      );
      if (currBookmark) {
        bookmarkID = currBookmark.id;
      }
      try {
        const deleteSucceeded = await deleteBookmark(accessToken, bookmarkID);
        if (deleteSucceeded) {
          updateBookmarks(
            currBookmarkValues.filter((bookmark) => bookmark.id !== bookmarkID)
          );
          setIsBookmarked(false);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      const label = prompt("Enter bookmark label:");
      if (label == null) {
        return;
      }
      const input: CustomBookmarkFields = {
        link: pathname,
        label: label,
      };
      try {
        const newBookmark = await postBookmark(accessToken, input);
        updateBookmarks([...currBookmarkValues, newBookmark]);
        setIsBookmarked(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <IconButton aria-label="bookmark" onClick={handleBookmarkToggle}>
      {isBookmarked ? (
        <MdBookmark id="bookmark" />
      ) : (
        <MdBookmarkBorder id="bookmark" />
      )}
    </IconButton>
  );
}

export function BookmarkHeader() {
  return (
    <Box
      sx={{
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <BookmarkButton />
    </Box>
  );
}

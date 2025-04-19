"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import Box from "@mui/material/Box";
import {
  Bookmark,
  CustomBookmarkFields,
  deleteBookmark,
  fetchAllBookmarks,
  fetchBookmark,
  postBookmark,
} from "@/API/BookmarkAPI";
import IconButton from "@mui/material/IconButton";

interface DashboardBookmarksProps {
  setDashboardBookmarks: (newBookmarks: Bookmark[]) => void;
  bookmarks: Bookmark[];
  jwt: string;
}

interface BookmarksProps {
  jwt: string;
}

export function BookmarkButton({ jwt }: BookmarksProps) {
  const params = useParams();
  const [bookmark, setBookmark] = useState<Bookmark | undefined>();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  var pathname = "";
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
  //   const checkIfBookmarked = async () => {
  //     try {
  //       const currentUrl = `${pathname}${searchParams.toString()}`;
  //       const bookmarks: Bookmark[] = await fetchAllBookmarks();
  //       setBookmarks(bookmarks);
  //       console.log("bookmarks: ", bookmarks);
  //       console.log("currentUrl: ", currentUrl);
  //       setBookmark(bookmarks.find((b) => b.link === currentUrl));
  //       setIsBookmarked(
  //         bookmarks.find((b) => b.link === currentUrl) ? true : false
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   checkIfBookmarked();
  // }, [pathname, searchParams, router.isReady]);

  const handleBookmarkToggle = async () => {
    // pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
    pathname = "";
    const currentUrl = `${pathname}${searchParams.toString()}`;
    if (isBookmarked) {
      if (!confirm("Are you sure you want to remove this bookmark?")) {
        return;
      }
      if (typeof bookmark != "undefined") {
        try {
          const deleteSucceeded = await deleteBookmark(jwt, bookmark.id);
          if (deleteSucceeded) {
            setBookmarks((prevBookmarks) =>
              prevBookmarks.filter(
                (curr_bookmark) => curr_bookmark.id !== bookmark.id
              )
            );
            setIsBookmarked(false);
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      const label = prompt("Enter bookmark label:");
      if (label == null) {
        return;
      }
      const input: CustomBookmarkFields = {
        link: currentUrl,
        label: label,
      };
      try {
        const newBookmark = await postBookmark(jwt, input);
        setBookmarks([...bookmarks, newBookmark]);
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

export function BookmarkHeader({ jwt }: BookmarksProps) {
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
      <BookmarkButton jwt={jwt} />
    </Box>
  );
}

export function DashboardBookmarkButton({
  jwt,
  bookmarks,
  setDashboardBookmarks,
}: DashboardBookmarksProps) {
  const params = useParams();
  console.log(params);
  const [isBookmarked, setIsBookmarked] = useState(false);
  var pathname = "";
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
  //   const currentUrl = `${pathname}${searchParams.toString()}`;
  //   setIsBookmarked(
  //     bookmarks.find((b) => b.link === currentUrl) ? true : false
  //   );
  // }, [router.isReady]);

  const handleBookmarkToggle = async () => {
    // pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
    pathname = "";
    const currentUrl = `${pathname}${searchParams.toString()}`;
    const encodedUrl = encodeURIComponent(currentUrl);
    if (isBookmarked) {
      if (!confirm("Are you sure you want to remove this bookmark?")) {
        return;
      }
      let bookmarkID: string = "";
      try {
        const bookmark = await fetchBookmark(jwt, encodedUrl);
        bookmarkID = bookmark.id;
      } catch (error) {
        console.error(error);
      }
      try {
        const deleteSucceeded = await deleteBookmark(jwt, bookmarkID);
        if (deleteSucceeded) {
          setDashboardBookmarks(
            bookmarks.filter((bookmark) => bookmark.id !== bookmarkID)
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
        link: currentUrl,
        label: label,
      };
      try {
        const newBookmark = await postBookmark(jwt, input);
        setDashboardBookmarks([...bookmarks, newBookmark]);
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

export function DashboardBookmarkHeader({
  bookmarks,
  jwt,
  setDashboardBookmarks,
}: DashboardBookmarksProps) {
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
      <DashboardBookmarkButton
        bookmarks={bookmarks}
        jwt={jwt}
        setDashboardBookmarks={setDashboardBookmarks}
      />
    </Box>
  );
}

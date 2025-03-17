import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
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
}

export function BookmarkButton({ disableBack = false }) {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  var pathname = "";
  const searchParams = useSearchParams();

  useEffect(() => {
    pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
    const checkIfBookmarked = async () => {
      try {
        const currentUrl = `${pathname}${searchParams.toString()}`;
        const bookmarks: Bookmark[] = await fetchAllBookmarks();
        setBookmarks(bookmarks);
        console.log("bookmarks: ", bookmarks);
        console.log("currentUrl: ", currentUrl);
        setIsBookmarked(
          bookmarks.find((b) => b.link === currentUrl) ? true : false
        );
      } catch (error) {
        console.error(error);
      }
    };
    checkIfBookmarked();
  }, [pathname, searchParams, router.isReady]);

  const handleBookmarkToggle = async () => {
    pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
    const currentUrl = `${pathname}${searchParams.toString()}`;
    const encodedUrl = encodeURIComponent(currentUrl);
    if (isBookmarked) {
      if (!confirm("Are you sure you want to remove this bookmark?")) {
        return;
      }
      let bookmarkID: string = "";
      try {
        const bookmark = await fetchBookmark(encodedUrl);
        bookmarkID = bookmark.id;
      } catch (error) {
        console.error(error);
      }
      try {
        const deleteSucceeded = await deleteBookmark(bookmarkID);
        if (deleteSucceeded) {
          setBookmarks((prevBookmarks) =>
            prevBookmarks.filter((bookmark) => bookmark.id !== bookmarkID)
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
        const newBookmark = await postBookmark(input);
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

export function BookmarkHeader({ disableBack = false }) {
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

export function DashboardBookmarkButton({
  bookmarks,
  setDashboardBookmarks,
}: DashboardBookmarksProps) {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);
  var pathname = "";
  const searchParams = useSearchParams();

  useEffect(() => {
    pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
    const currentUrl = `${pathname}${searchParams.toString()}`;
    setIsBookmarked(
      bookmarks.find((b) => b.link === currentUrl) ? true : false
    );
  }, [router.isReady]);

  const handleBookmarkToggle = async () => {
    pathname = router.asPath.slice(1); //get rid of '/' at the beginning since it messes with the api
    const currentUrl = `${pathname}${searchParams.toString()}`;
    const encodedUrl = encodeURIComponent(currentUrl);
    if (isBookmarked) {
      if (!confirm("Are you sure you want to remove this bookmark?")) {
        return;
      }
      let bookmarkID: string = "";
      try {
        const bookmark = await fetchBookmark(encodedUrl);
        bookmarkID = bookmark.id;
      } catch (error) {
        console.error(error);
      }
      try {
        const deleteSucceeded = await deleteBookmark(bookmarkID);
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
        const newBookmark = await postBookmark(input);
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
        setDashboardBookmarks={setDashboardBookmarks}
      />
    </Box>
  );
}

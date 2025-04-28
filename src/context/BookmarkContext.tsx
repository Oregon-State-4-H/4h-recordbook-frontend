"use client";

import React, { createContext, useContext, useState } from "react";
import { Bookmark } from "@/API/BookmarkAPI";

export interface BookmarkProp {
  currBookmarkValues: Bookmark[];
  populated: boolean;
  reloaded: boolean;
  updateBookmarks: (values: Bookmark[] | boolean) => void;
}

export const bookmarkContextDefaultProp: BookmarkProp = {
  currBookmarkValues: [],
  populated: false,
  reloaded: true,
  updateBookmarks: () => {},
};

export const BookmarkContext = createContext<BookmarkProp>(
  bookmarkContextDefaultProp
);

export function useBookmark() {
  return useContext(BookmarkContext);
}

type Props = {
  children: React.ReactNode;
};

export function BookmarkProvider({ children }: Props) {
  const [currBookmarkContext, setCurrBookmarkContext] = useState<Bookmark[]>(
    []
  );
  const [isPopulated, setIsPopulated] = useState<boolean>(false);
  const [isReloaded, setIsReloaded] = useState<boolean>(false);

  const update = (updatedNavBarValues: Bookmark[] | boolean) => {
    if (typeof updatedNavBarValues == "boolean") {
      setIsReloaded(updatedNavBarValues);
    } else {
      setCurrBookmarkContext(updatedNavBarValues);
      setIsPopulated(true);
    }
  };

  const value: BookmarkProp = {
    currBookmarkValues: currBookmarkContext,
    populated: isPopulated,
    reloaded: isReloaded,
    updateBookmarks: update,
  };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}

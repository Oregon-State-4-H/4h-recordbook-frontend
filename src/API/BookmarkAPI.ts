import { buildBaseUrl } from "@/API/base";
import { useUser } from "@/context/UserContext";

export interface CustomBookmarkFields {
  link: string;
  label: string;
}

export type Bookmark = CustomBookmarkFields & {
  id: string;
  user_id: string;
  created: string;
  updated: string;
};

export const fetchAllBookmarks = async (jwt: string): Promise<Bookmark[]> => {
  try {
    const response = await fetch(`${buildBaseUrl()}bookmarks`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Cache-Control': `no-cache`,
      },
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.bookmarks as Bookmark[];
  } catch (error) {
    throw error;
  }
};

export const fetchBookmark = async (
  jwt: string,
  url: string
): Promise<Bookmark> => {
  try {
    const response = await fetch(`${buildBaseUrl()}bookmarks/${url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.bookmark as Bookmark;
  } catch (error) {
    throw error;
  }
};

export const postBookmark = async (
  jwt: string,
  bookmark: CustomBookmarkFields
): Promise<Bookmark> => {
  try {
    const response = await fetch(`${buildBaseUrl()}bookmarks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
      body: JSON.stringify(bookmark),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.bookmark as Bookmark;
  } catch (error) {
    throw error;
  }
};

export const deleteBookmark = async (jwt: string, bookmarkID: string) => {
  try {
    const response = await fetch(`${buildBaseUrl()}bookmarks/${bookmarkID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

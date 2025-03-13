export interface CustomBookmarkFields {
    link: string,
    label: string,
}

export type Bookmark = CustomBookmarkFields & {
    id: string,
    user_id: string,
    created: string,
    updated: string,
} 

export const fetchAllBookmarks = async (): Promise<Bookmark[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks`, {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return data.bookmarks as Bookmark[];

    }
    catch (error) {
        throw error;
    }
}

export const fetchBookmark = async (url: string): Promise<Bookmark> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks/${url}`, {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return data.bookmark as Bookmark;

    }
    catch (error) {
        throw error;
    }    
}

export const postBookmark = async (bookmark: CustomBookmarkFields): Promise<Bookmark> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(bookmark),
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return data.bookmark as Bookmark;

    }
    catch (error) {
        throw error;
    }
}

export const deleteBookmark = async (bookmarkID: string) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks/${bookmarkID}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message || "Unexpected error occurred");
        }
        return true;
        
    }
    catch (error) {
        throw error;
    }

}
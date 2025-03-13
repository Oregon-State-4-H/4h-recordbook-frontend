import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import BackButton from '@/components/BackButton';
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { Bookmark, CustomBookmarkFields, deleteBookmark, fetchAllBookmarks, fetchBookmark, postBookmark } from "@/API/BookmarkAPI";

export default function PageHeader({ disableBack = false }) {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const pathname = usePathname().slice(1); //get rid of '/' at the beginning since it messes with the api
    const searchParams = useSearchParams();

    useEffect(() => {
        const checkIfBookmarked = async () => {
          try {
            const bookmarks: Bookmark[] = await fetchAllBookmarks();
            const currentUrl = `${pathname}?${searchParams.toString()}`;
            setBookmarks(bookmarks);
            setIsBookmarked(bookmarks.find(b => b.link === currentUrl) ? true : false);
          } catch (error) {
            console.error(error);
          }
        };
        checkIfBookmarked();
    }, [pathname, searchParams]);

    const handleBookmarkToggle = async () => {
        const currentUrl = `${pathname}?${searchParams.toString()}`;
        const encodedUrl = encodeURIComponent(currentUrl)
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
            } 
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
        <div className="pageHeader">
            {!disableBack && <BackButton />}
            <div className="bookmarkContainer">
                <BookmarkButton isBookmarked={isBookmarked} onToggle={handleBookmarkToggle} />
            </div>
        </div>
    );
}

interface BookmarkButtonProps {
    isBookmarked: boolean,
    onToggle: any
}

function BookmarkButton({ isBookmarked, onToggle }: BookmarkButtonProps) {
    return (
        <button onClick={onToggle}>
            {isBookmarked ? <MdBookmark id="bookmark" /> : <MdBookmarkBorder id="bookmark" />}
        </button>
    );
}

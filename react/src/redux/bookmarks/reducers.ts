import { FAIL_BOOKMARKS, RECEIVE_BOOKMARKS, REQUEST_BOOKMARKS, SET_BOOKMARK_ID } from "./actions";
import { data } from "./data";
import { IActions, IBookmarkState } from "./types";

const initialState = data;

const setBookmarkId = (bookmarkIds: number[], bookmarkId: number) => {
  const bookmarkIdIndex = bookmarkIds.indexOf(bookmarkId);
  return bookmarkIdIndex === -1 ? bookmarkIds.concat([bookmarkId]) : bookmarkIds.slice(0, bookmarkIdIndex + 1);
};

export const receiveBookmarks = (bookmarkData: IBookmarkState["bookmarkData"]): IBookmarkState["bookmarkData"] => {
  return [
    {
      id: -1,
      name: "Home",
    },
  ].concat(
    bookmarkData.map((bookmark) => {
      if (!bookmark.folderId) {
        console.log("Bookmark has no folderId! Defaulting to home...");
        return {
          ...bookmark,
          folderId: -1,
        };
      } else {
        return bookmark;
      }
    }),
  );
};

export const bookmarks = (state = initialState, action: IActions): IBookmarkState => {
  switch (action.type) {
    case SET_BOOKMARK_ID:
      return {
        ...state,
        bookmarkIds: setBookmarkId(state.bookmarkIds, action.bookmarkId),
      };
    case REQUEST_BOOKMARKS:
      return {
        ...state,
        fetching: {
          isFetching: true,
          isSuccess: false,
          isFailure: false,
        },
      };
    case RECEIVE_BOOKMARKS:
      return {
        ...state,
        bookmarkData: receiveBookmarks(action.bookmarkData),
        fetching: {
          isFetching: false,
          isSuccess: true,
          isFailure: false,
        },
      };
    case FAIL_BOOKMARKS:
      return {
        ...state,
        fetching: {
          isFetching: false,
          isSuccess: false,
          isFailure: true,
        },
      };
    default:
      return { ...state };
  }
};

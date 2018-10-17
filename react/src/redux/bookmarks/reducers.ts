import { SET_BOOKMARK_ID } from "./actions";
import { data } from "./data";
import { IActions } from "./types";

const initialState = data;

const setBookmarkId = (bookmarkIds: number[], bookmarkId: number) => {
  const bookmarkIdIndex = bookmarkIds.indexOf(bookmarkId);
  return bookmarkIdIndex === -1 ? bookmarkIds.concat([bookmarkId]) : bookmarkIds.slice(0, bookmarkIdIndex + 1);
};

export const bookmarks = (state = initialState, action: IActions) => {
  switch (action.type) {
    case SET_BOOKMARK_ID:
      return {
        ...state,
        bookmarkIds: setBookmarkId(state.bookmarkIds, action.bookmarkId),
      };
    default:
      return { ...state };
  }
};

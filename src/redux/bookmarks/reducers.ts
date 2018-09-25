import { SET_BOOKMARK_ID } from "./actions";
import { IActions, IBookmarkState } from "./types";

const initialState: IBookmarkState = {
  bookmarkData: [
    {
      id: 0,
      name: "Home",
    },
    {
      id: 1,
      name: "Google",
      folderId: 0,
    },
    {
      id: 2,
      name: "Calendar",
      data: "https://www.google.com/calendar/render#main_7",
      folderId: 1,
    },
    {
      id: 3,
      name: "greenwich on the park",
      data: "https://www.greenwichapts.com/amenities.aspx",
      folderId: 0,
    },
    {
      id: 4,
      name: "current at the bank",
      data: "https://currentcinci.com/features/",
      folderId: 0,
    },
    {
      id: 5,
      name: "tsconfig",
      data: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
      folderId: 0,
    },
  ],
  bookmarkIds: [0, 1],
};

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

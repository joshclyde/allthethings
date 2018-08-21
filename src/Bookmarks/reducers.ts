import { IBookmarkSingle } from "./types";

// actions and action creators
const SET_BOOKMARK_ID = "SET_BOOKMARK_ID";
export const setBookmarkId = (bookmarkId: number) => ({ type: SET_BOOKMARK_ID, bookmarkId });

// types of state and actions
interface IBookmarkState {
  bookmarkData: IBookmarkSingle[];
  bookmarkId: number;
}

interface IActions {
  type: string;
  bookmarkId: number;
}

// initial state
const initialState: IBookmarkState = {
  bookmarkData: [
    {
      id: 1,
      name: "Google",
      data: [
        {
          name: "Calendar",
          data: "https://www.google.com/calendar/render#main_7",
        },
      ],
    },
    {
      name: "greenwich on the park",
      data: "https://www.greenwichapts.com/amenities.aspx",
    },
    {
      name: "current at the bank",
      data: "https://currentcinci.com/features/",
    },
    {
      name: "tsconfig",
      data: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
    },
  ],
  bookmarkId: undefined,
};

// reducer functions
const doSetBookmarkId = (state: IBookmarkState, bookmarkId: number) => ({
  ...state,
  bookmarkId,
});

// reducers
export const bookmarks = (state = initialState, action: IActions) => {
  switch (action.type) {
    case SET_BOOKMARK_ID:
      return doSetBookmarkId(state, action.bookmarkId);
    default:
      return { ...state };
  }
};

// selectors
export interface IState {
  bookmarks: IBookmarkState;
}

const getBookmarks = (state: IState) => state.bookmarks || ({} as IBookmarkState);
const getBookmarkData = (state: IState) => getBookmarks(state).bookmarkData;
const getBookmarkId = (state: IState) => getBookmarks(state).bookmarkId;

export const selectors = {
  getBookmarks,
  getBookmarkData,
  getBookmarkId,
};

import axios from "axios";

import { IActions, IBookmarkData } from "./types";

export const SET_BOOKMARK_ID = "SET_BOOKMARK_ID";
export const setBookmarkId = (bookmarkId: number) => ({ type: SET_BOOKMARK_ID, bookmarkId });

export const REQUEST_BOOKMARKS = "REQUEST_BOOKMARKS";
export const requestBookmarks = () => ({ type: REQUEST_BOOKMARKS });

export const RECEIVE_BOOKMARKS = "RECEIVE_BOOKMARKS";
export const receiveBookmarks = (bookmarkData: IBookmarkData[]) => ({ type: RECEIVE_BOOKMARKS, bookmarkData });

export const FAIL_BOOKMARKS = "FAIL_BOOKMARKS";
export const failBookmarks = () => ({ type: FAIL_BOOKMARKS });

export const fetchBookmarks = () => async (dispatch: (action: IActions) => void) => {
  dispatch(requestBookmarks());
  try {
    const response = await axios.get("http://localhost:4000/bookmarks");
    const data = response.data as IBookmarkData[];
    // console.log(data);
    // const dataNew = [data[0]];
    // console.log(dataNew);
    dispatch(receiveBookmarks(data));
  } catch (error) {
    dispatch(failBookmarks());
  }
};

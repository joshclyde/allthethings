import { IState } from "../types";
import { IBookmarkState } from "./types";

const getBookmarks = (state: IState) => state.bookmarks || ({} as IBookmarkState);
const getBookmarkData = (state: IState) => getBookmarks(state).bookmarkData;
const getBookmarkIds = (state: IState) => getBookmarks(state).bookmarkIds;
const getCurrentBookmarkId = (state: IState) => getBookmarkIds(state).slice(-1)[0];
const getBookmarkFolders = (state: IState) => {
  const bookmarkData = getBookmarkData(state);
  const bookmarkIds = getBookmarkIds(state);
  return bookmarkIds.map((id) => bookmarkData.find(({ id: dataId }) => dataId === id));
};
const getCurrentBookmarks = (state: IState) => {
  const currentBookmarkId = getCurrentBookmarkId(state);
  const bookmarkData = getBookmarkData(state);
  return bookmarkData.filter((bookmark) => {
    return bookmark.folderId === currentBookmarkId;
  });
};

export const selectors = {
  getBookmarks,
  getBookmarkData,
  getBookmarkIds,
  getCurrentBookmarkId,
  getBookmarkFolders,
  getCurrentBookmarks,
};

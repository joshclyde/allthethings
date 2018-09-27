import { IState } from "../types";
import { IBookmarkState } from "./types";

// const recusrion = (bookmarkIds: IBookmarkSingle[], id: number): IBookmarkSingle => {
//   const newArray = bookmarkIds.filter((bookmark) => Array.isArray(bookmark.data));
//   if (Array.isArray(newArray) && newArray.length > 0) {
//     const found = newArray.find((bookmark) => bookmark.id === id);
//     if (found) {
//       return found;
//     } else {
//       const anotherArray = newArray.map((bookmark) => recusrion(bookmark.data as IBookmarkSingle[], id));
//       if (anotherArray.length > 1) {
//         // tslint:disable-next-line: no-console
//         console.log("uh oh!! array has length > 1 for some odd reason");
//       } else if (anotherArray.length === 1) {
//         return anotherArray[0];
//       }
//     }
//   }
//   return undefined;
// };

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

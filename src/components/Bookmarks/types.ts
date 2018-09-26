import { IBookmarkData } from "@redux/bookmarks/types";

export interface IStateToProps {
  bookmarkFolders: IBookmarkData[];
  currentBookmarks: IBookmarkData[];
}

export interface IDispatchToProps {
  onSetBookmarkId(bookmarkId: number): void;
}

export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IBookmarksProps {
  nothing: string;
}

export interface IProps extends IStateToProps, IDispatchToProps, IStyle, IBookmarksProps {}

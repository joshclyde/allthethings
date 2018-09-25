import { IBookmarkData } from "../../../redux/bookmarks/types";

export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IBookmarkGridProps {
  currentBookmarks: IBookmarkData[];
  onSetBookmarkId(bookmarkId: number): void;
}

export interface IProps extends IStyle, IBookmarkGridProps {}

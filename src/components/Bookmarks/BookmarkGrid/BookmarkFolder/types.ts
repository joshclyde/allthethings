import { IBookmarkData } from "../../../../redux/bookmarks/types";

export interface IStyle {
  classes: {
    wholeDiv: string;
    icon: string;
  };
}

export interface IBookmarkFolderProps {
  bookmark: IBookmarkData;
  onSetBookmarkId(bookmarkId: number): void;
}

export interface IProps extends IStyle, IBookmarkFolderProps {}

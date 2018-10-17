import { IBookmarkData } from "@redux/bookmarks/types";
import { IDispatchToProps } from "../types";

export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IBookmarkBarProps {
  bookmarkFolders: IBookmarkData[];
  onSetBookmarkId: IDispatchToProps["onSetBookmarkId"];
  overrideClassName?: string;
}

export interface IProps extends IStyle, IBookmarkBarProps {}

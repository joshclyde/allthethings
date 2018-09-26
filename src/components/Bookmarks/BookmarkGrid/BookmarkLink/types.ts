import { IBookmarkData } from "@redux/bookmarks/types";

export interface IStyle {
  classes: {
    wholeDiv: string;
    icon: string;
  };
}

export interface IBookmarkLinkProps {
  bookmark: IBookmarkData;
}

export interface IProps extends IStyle, IBookmarkLinkProps {}

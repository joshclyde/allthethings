import { IBookmarkData } from "@redux/bookmarks/types";

export interface IStyle {
  classes: {
    wholeDiv: string;
    icon: string;
    hovering: string;
  };
}

export interface IBookmarkButtonProps {
  bookmark: IBookmarkData;
  isHovering: boolean;
}

export interface IProps extends IStyle, IBookmarkButtonProps {}

import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import { IBookmarkData } from "@redux/bookmarks/types";
import multiclass from "@utils/mutliclass";

import BookmarkButton from "./BookmarkButton";
import { IBookmarkGridProps, IProps } from "./types";

const BookmarkGrid = ({ classes, overrideClassName, currentBookmarks, onSetBookmarkId }: IProps) => (
  <div className={multiclass(classes.wholeDiv, overrideClassName)}>
    {currentBookmarks.map((bookmark: IBookmarkData) => (
      <BookmarkButton bookmark={bookmark} url={bookmark.data} onClick={() => onSetBookmarkId(bookmark.id)} />
    ))}
  </div>
);

const styles = {
  wholeDiv: {
    height: "100%",

    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 8,

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  buttonDiv: {},
};

export default injectSheet(styles)(BookmarkGrid) as React.SFC<IBookmarkGridProps>;

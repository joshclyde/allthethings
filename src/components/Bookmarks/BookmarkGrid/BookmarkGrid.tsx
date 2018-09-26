import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import { IBookmarkData } from "@redux/bookmarks/types";

import BookmarkFolder from "./BookmarkFolder";
import BookmarkLink from "./BookmarkLink";
import { IBookmarkGridProps, IProps } from "./types";

// could be empty string
const isFolder = (bookmark: IBookmarkData) => !bookmark.data;

const BookmarkGrid = ({ classes, currentBookmarks, onSetBookmarkId }: IProps) => (
  <div className={classes.wholeDiv}>
    {currentBookmarks.map(
      (bookmark: IBookmarkData) =>
        isFolder(bookmark) ? (
          <BookmarkFolder bookmark={bookmark} onSetBookmarkId={onSetBookmarkId} />
        ) : (
          <BookmarkLink bookmark={bookmark} />
        ),
    )}
  </div>
);

const styles = {
  wholeDiv: {},
};

export default injectSheet(styles)(BookmarkGrid) as React.SFC<IBookmarkGridProps>;

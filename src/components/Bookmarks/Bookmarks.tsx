import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import { connect, Dispatch } from "react-redux";

import { setBookmarkId } from "@redux/bookmarks/actions";
import { selectors } from "@redux/bookmarks/selectors";
import { IState } from "@redux/bookmarks/types";

import BookmarkBar from "./BookmarkBar";
import BookmarkGrid from "./BookmarkGrid";
import { IBookmarksProps, IDispatchToProps, IProps, IStateToProps } from "./types";

const Bookmarks = ({ classes, bookmarkFolders, currentBookmarks, onSetBookmarkId }: IProps) => (
  <div className={classes.wholeDiv}>
    <BookmarkBar bookmarkFolders={bookmarkFolders} onSetBookmarkId={onSetBookmarkId} />
    <BookmarkGrid currentBookmarks={currentBookmarks} onSetBookmarkId={onSetBookmarkId} />
  </div>
);

const styles = {
  wholeDiv: {
    textAlign: "center",
  },
};

const mapStateToProps = (state: IState): IStateToProps => ({
  bookmarkFolders: selectors.getBookmarkFolders(state),
  currentBookmarks: selectors.getCurrentBookmarks(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => ({
  onSetBookmarkId: (bookmarkId: number) => dispatch(setBookmarkId(bookmarkId)),
});

export default connect<IStateToProps, IDispatchToProps, IBookmarksProps>(
  mapStateToProps,
  mapDispatchToProps,
)(injectSheet(styles)(Bookmarks));

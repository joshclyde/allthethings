import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import { connect, Dispatch } from "react-redux";

import { fetchBookmarks, setBookmarkId } from "@redux/bookmarks/actions";
import { selectors as bookmarkSelectors } from "@redux/bookmarks/selectors";
import { IState } from "@redux/types";
import { selectors as uiSelectors } from "@redux/ui/selectors";

import BookmarkBar from "./BookmarkBar";
import BookmarkGrid from "./BookmarkGrid";
import { IBookmarksProps, IDispatchToProps, IProps, IStateToProps } from "./types";

// const Bookmarks = ({ classes, bookmarkFolders, currentBookmarks, onSetBookmarkId }: IProps) => (
//   <div className={classes.wholeDiv}>
//     <div style={{ height: 8 }} />
//     <BookmarkBar bookmarkFolders={bookmarkFolders} onSetBookmarkId={onSetBookmarkId} />
//     <div style={{ height: 8 }} />
//     <BookmarkGrid currentBookmarks={currentBookmarks} onSetBookmarkId={onSetBookmarkId} />
//   </div>
// );

class Bookmarks extends React.Component<IProps, {}> {
  componentDidMount() {
    const { onFetchBookamrks } = this.props;
    onFetchBookamrks();
  }

  render() {
    const { classes, bookmarkFolders, currentBookmarks, onSetBookmarkId } = this.props;
    return (
      <div className={classes.wholeDiv}>
        <div style={{ height: 8 }} />
        <BookmarkBar bookmarkFolders={bookmarkFolders} onSetBookmarkId={onSetBookmarkId} />
        <div style={{ height: 8 }} />
        <BookmarkGrid currentBookmarks={currentBookmarks} onSetBookmarkId={onSetBookmarkId} />
      </div>
    );
  }
}

const styles = {
  wholeDiv: ({ uiWidth }: IProps) => {
    return {
      margin: "0 auto",
      width: Math.min(uiWidth, 1080),
      // textAlign: "center",
      // justifyContent: "center",
    };
  },
};

const mapStateToProps = (state: IState): IStateToProps => ({
  bookmarkFolders: bookmarkSelectors.getBookmarkFolders(state),
  currentBookmarks: bookmarkSelectors.getCurrentBookmarks(state),
  uiWidth: uiSelectors.getWidth(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => ({
  onSetBookmarkId: (bookmarkId: number) => dispatch(setBookmarkId(bookmarkId)),
  onFetchBookamrks: () => dispatch(fetchBookmarks()),
});

export default connect<IStateToProps, IDispatchToProps, IBookmarksProps>(
  mapStateToProps,
  mapDispatchToProps,
)(injectSheet(styles)(Bookmarks));

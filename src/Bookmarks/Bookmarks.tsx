import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import { connect, Dispatch } from "react-redux";

import BookmarkFolder from "./BookmarkFolder";
import BookmarkLink from "./BookmarkLink";
import { IState, selectors, setBookmarkId } from "./reducers";
import { IBookmarkSingle, IBookmarksProps, IDispatchToProps, IProps, IStateToProps } from "./types";

const getFavicon = (data: string | IBookmarkSingle[]): string => {
  if (typeof data === "string") {
    return data.replace(/(.*?[^\/])(\/[^\/].*)/, "$1/favicon.ico");
    // const dataURL = new URL(data);
    // return `https://www.google.com/s2/favicons?domain_url=${dataURL.hostname}`;
  } else {
    return "https://png.icons8.com/cotton/64/000000/folder-invoices.png";
  }
};

const Bookmarks = ({ classes, bookmarkData, onChangeBookmarkId }: IProps) => (
  <div className={classes.wholeDiv}>
    {bookmarkData.map(({ name, data: bookmarkData2, id }) => {
      return typeof bookmarkData2 === "string" ? (
        <BookmarkLink
          imgSrc={getFavicon(bookmarkData2)}
          name={name}
          onClick={() => (window.location.href = bookmarkData2)}
          hrefPath={typeof bookmarkData2 === "string" ? bookmarkData2 : undefined}
        />
      ) : (
        <BookmarkFolder name={name} onClick={() => onChangeBookmarkId(id)} />
      );
    })}
  </div>
);

const styles = {
  wholeDiv: {},
};

const mapStateToProps = (state: IState): IStateToProps => ({
  bookmarkData: selectors.getBookmarkData(state),
  bookmarkId: selectors.getBookmarkId(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => ({
  onChangeBookmarkId: (bookmarkId: number) => dispatch(setBookmarkId(bookmarkId)),
});

export default connect<IStateToProps, IDispatchToProps, IBookmarksProps>(
  mapStateToProps,
  mapDispatchToProps,
)(injectSheet(styles)(Bookmarks));

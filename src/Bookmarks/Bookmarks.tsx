import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import { connect, Dispatch } from "react-redux";

import Bookmark from "./Bookmark";
import { IBookmarkProps } from "./Bookmark/types";
import { IState, selectors, setBookmarkId } from "./reducers";
import { IBookmarkSingle, IBookmarksProps, IDispatchToProps, IProps, IStateToProps } from "./types";

// TODO: do this better maybe
const createOnClick = (data: string | IBookmarkSingle[]): IBookmarkProps["onClick"] => {
  if (typeof data === "string") {
    return () => (window.location.href = data);
  } else {
    // tslint:disable-next-line: no-console
    return () => console.log(data);
  }
};

const getFavicon = (data: string | IBookmarkSingle[]): string => {
  if (typeof data === "string") {
    // better resolution, doesn't always get ico
    // console.log(data.replace(/(.*?[^\/])(\/[^\/].*)/, "$1/favicon.ico"));
    return data.replace(/(.*?[^\/])(\/[^\/].*)/, "$1/favicon.ico");

    // worst resolution, basically always gets ico
    // const dataURL = new URL(data);
    // console.log(`https://www.google.com/s2/favicons?domain_url=${dataURL.hostname}`);
    // return `https://www.google.com/s2/favicons?domain_url=${dataURL.hostname}`;
  } else {
    // console.log("https://png.icons8.com/cotton/64/000000/folder-invoices.png");
    return "https://png.icons8.com/cotton/64/000000/folder-invoices.png";
  }
};

const Bookmarks = ({ classes, bookmarkData }: IProps) => (
  <div className={classes.wholeDiv}>
    {bookmarkData.map(({ name, data: bookmarkData2 }) => {
      return (
        <Bookmark
          imgSrc={getFavicon(bookmarkData2)}
          name={name}
          onClick={createOnClick(bookmarkData2)}
          hrefPath={typeof bookmarkData2 === "string" ? bookmarkData2 : undefined}
        />
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

// export default injectSheet(styles)(Bookmarks);

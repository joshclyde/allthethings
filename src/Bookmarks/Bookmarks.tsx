import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import Bookmark from "./Bookmark";
// import { connect, Dispatch } from "react-redux";
// import { IState, selectors, setNextChord } from "./reducers";
import { IBookmarkSingle, IProps } from "./types";

import { IBookmarkProps } from "./Bookmark/types";

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

const Bookmarks = ({ classes, data }: IProps) => (
  <div className={classes.wholeDiv}>
    {data.map(({ name, data: bookmarkData }) => {
      return <Bookmark imgSrc={getFavicon(bookmarkData)} name={name} onClick={createOnClick(bookmarkData)} />;
    })}
  </div>
);

const styles = {
  wholeDiv: {},
};

// const mapStateToProps = (state: IState): IStateToProps => ({
//   stateVar: selectors.getStateVar(state),
// });

// const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => ({
//   dispatchFunction: () => dispatch({ type: "YOUR_ACTION" }),
// });

// export default connect<IStateToProps, IDispatchToProps, IYourComponentProps>(
//   mapStateToProps,
//   mapDispatchToProps,
// )(injectSheet(styles)(YourComponent));

export default injectSheet(styles)(Bookmarks);

import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import { IBookmarkBarProps, IProps } from "./types";

const BookmarkBar = ({ classes, bookmarkFolders, onSetBookmarkId }: IProps) => (
  <div className={classes.wholeDiv}>
    {bookmarkFolders.map(({ id, name }) => <button onClick={() => onSetBookmarkId(id)}>{name}</button>)}
  </div>
);

const styles = {
  wholeDiv: {},
};

export default injectSheet(styles)(BookmarkBar) as React.SFC<IBookmarkBarProps>;

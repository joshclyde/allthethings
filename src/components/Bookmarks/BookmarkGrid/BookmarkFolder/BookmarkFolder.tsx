import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import { IBookmarkFolderProps, IProps } from "./types";

const BookmarkFolder = ({ classes, bookmark, onSetBookmarkId }: IProps) => (
  <div className={classes.wholeDiv} onClick={() => onSetBookmarkId(bookmark.id)}>
    <div>
      <img className={classes.icon} src="assets/folderBlack.svg" width={20} height={20} />
    </div>
    <div>{bookmark.name}</div>
  </div>
);

export const styles = {
  wholeDiv: {
    width: 100,
    height: 100,
    margin: "auto",
    borderColor: "red",
    borderStyle: "solid",
  },
  icon: {
    width: 70,
    height: 50,
    padding: 10,
  },
};

export default injectSheet(styles)(BookmarkFolder) as React.SFC<IBookmarkFolderProps>;

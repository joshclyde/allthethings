import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import getFavicon from "../../utils/getFavicon";
import { IBookmarkLinkProps, IProps } from "./types";

const BookmarkLink = ({ classes, bookmark }: IProps) => (
  <div className={classes.wholeDiv}>
    <a href={bookmark.data}>
      <div>
        <img className={classes.icon} src={getFavicon(bookmark.data)} width={20} height={20} />
      </div>
      <div>{bookmark.name}</div>
    </a>
  </div>
);

const styles = {
  wholeDiv: {
    width: 100,
    height: 100,
    margin: "auto",
    borderColor: "red",
    borderStyle: "solid",
  },
  icon: {
    width: 50,
    height: 50,
  },
};

export default injectSheet(styles)(BookmarkLink) as React.SFC<IBookmarkLinkProps>;

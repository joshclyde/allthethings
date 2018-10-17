import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import withClickable from "@hocs/withClickable";
import multiclass from "@utils/mutliclass";

import getFavicon from "../../utils/getFavicon";
import { IBookmarkButtonProps, IProps } from "./types";

const BookmarkButton = ({ classes, bookmark, isHovering }: IProps) => (
  <div className={multiclass(classes.wholeDiv, isHovering && classes.hovering)}>
    <div>
      <img
        className={classes.icon}
        src={bookmark.data ? getFavicon(bookmark.data) : "assets/folderBlack.svg"}
        width={20}
        height={20}
      />
    </div>
    <span>{bookmark.name}</span>
  </div>
);

const styles = {
  wholeDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: 128,
    height: 128,
  },
  icon: {
    width: 64,
    height: 64,
  },
  hovering: {
    background: "lightgrey",
  },
};

export default withClickable(injectSheet(styles)(BookmarkButton) as React.SFC<IBookmarkButtonProps>);

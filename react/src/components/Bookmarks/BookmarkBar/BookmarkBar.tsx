import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import multiclass from "@utils/mutliclass";

import BarButton from "./BarButton";
import { IBookmarkBarProps, IProps } from "./types";

const BookmarkBar = ({ classes, overrideClassName, bookmarkFolders, onSetBookmarkId }: IProps) => (
  <div className={multiclass(classes.wholeDiv, overrideClassName)}>
    {bookmarkFolders.map(({ id, name }) => <BarButton text={name} onClick={() => onSetBookmarkId(id)} />)}
  </div>
);

const styles = {
  wholeDiv: {
    height: 40,

    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 8,

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "flex-start",
  },
};

export default injectSheet(styles)(BookmarkBar) as React.SFC<IBookmarkBarProps>;

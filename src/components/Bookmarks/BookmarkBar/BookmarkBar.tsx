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
    // margin: 8,
    height: 40,
    padding: 4,

    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
};

export default injectSheet(styles)(BookmarkBar) as React.SFC<IBookmarkBarProps>;

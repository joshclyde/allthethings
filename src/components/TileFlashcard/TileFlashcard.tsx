import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import Categories from "./Categories";
import { IProps } from "./types";

import { multiclass } from "../../utils";

const TileFlashcard = ({ classes }: IProps) => (
  <div className={multiclass(classes.partialScreen, classes.wholeDiv)}>
    <Categories categories={["Category 1", "Category 2"]} />
  </div>
);

const styles = {
  fullScreen: {
    height: "calc(100vh - 18px)",
    width: "calc(100vw - 18px)",
  },
  partialScreen: {
    width: "100%",
  },
  wholeDiv: ({ gridStyle }: IProps) => {
    return {
      alignContent: "flext-start",
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "col",
      flexWrap: "wrap",
      justifyContent: "space-around",
      outline: "1px solid black",
      ...gridStyle,
    };
  },
};

export default injectSheet(styles)(TileFlashcard);

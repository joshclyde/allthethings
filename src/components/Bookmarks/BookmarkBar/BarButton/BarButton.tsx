import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import withClickable from "@hocs/withClickable";
import mutlclasses from "@utils/mutliclass";

import { IBarButtonProps, IProps } from "./types";

const BarButton = ({ classes, text, isHovering }: IProps) => (
  <div className={mutlclasses(classes.whole, isHovering && classes.hovering)}>
    <span className={classes.text}>{text} ></span>
  </div>
);

const styles = {
  whole: {
    padding: 8,
    boxSizing: "border-box",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hovering: {
    background: "lightgrey",
  },
};

export default withClickable(injectSheet(styles)(BarButton) as React.SFC<IBarButtonProps>);

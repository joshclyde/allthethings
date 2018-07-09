import * as React from "react";
import injectSheet from "react-jss";
import { ITempoButtonProps } from "./types";

const TempoButton = ({ classes }: ITempoButtonProps) => (
  <svg className={classes.svg}>
    <circle className={`${classes.both} ${classes.back}`} />
    <circle className={`${classes.both} ${classes.front}`} />
    Sorry, your browser does not support inline SVG.
  </svg>
);

const styles = {
  svg: {
    height: 50,
    width: 50,
  },
  back: {
    opacity: 0.3,
    r: ({ alpha }) => Math.max(alpha * 25, 0),
  },
  both: {
    cx: 25,
    cy: 25,
    fill: "#85EFC4",
  },
  front: {
    r: 15,
  },
};

// export default SmartTempoButton;
export default injectSheet(styles)(TempoButton);

import * as React from "react";
import injectSheet from "react-jss";
import { ITempoButtonProps } from "./types";

const TempoButton = ({ alpha, classes }: ITempoButtonProps) => (
  <div>
    <svg height="50" width="50">
      <circle className={`${classes.both} ${classes.back}`} />
      <circle className={`${classes.both} ${classes.front}`} />
      Sorry, your browser does not support inline SVG.
    </svg>
  </div>
);

const styles = {
  both: {
    cx: 25,
    cy: 25,
    fill: "#85EFC4",
  },
  front: {
    r: 15,
  },
  back: {
    r: props => Math.max(props.alpha * 25, 0),
    opacity: 0.3,
  },
};

// export default SmartTempoButton;
export default injectSheet(styles)(TempoButton);

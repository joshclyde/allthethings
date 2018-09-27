import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import withClickable from "@hocs/withClickable";
import mutlclasses from "@utils/mutliclass";

import { IBarButtonProps, IProps } from "./types";

// class BarButton extends React.Component<IProps, { isHovering: boolean }> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = { isHovering: false };
//   }

//   handleOnMouseOver = () => this.setState({ isHovering: true });
//   handleOnMouseOut = () => this.setState({ isHovering: false });

//   render() {
//     const { isHovering } = this.state;
//     const { classes, text, onClick } = this.props;
//     return (
//       <div
//         className={mutlclasses(classes.whole, isHovering && classes.hovering)}
//         onClick={onClick}
//         onMouseOver={this.handleOnMouseOver}
//         onMouseOut={this.handleOnMouseOut}
//       >
//         <span className={classes.text}>{text} ></span>
//       </div>
//     );
//   }
// }
const BarButton = ({ classes, text, onClick, isHovering }: IProps) => (
  <div className={mutlclasses(classes.whole, isHovering && classes.hovering)} onClick={onClick}>
    <span className={classes.text}>{text} ></span>
  </div>
);

const styles = {
  whole: {
    padding: 2,
    boxSizing: "border-box",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    cursor: "pointer",
  },
  text: {
    display: "inline",
  },
  hovering: {
    background: "lightgrey",
  },
};

const smartComponent = withClickable(injectSheet(styles)(BarButton) as React.SFC<IBarButtonProps>);

export default smartComponent;

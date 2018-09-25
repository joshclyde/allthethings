import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
// import { connect, Dispatch } from "react-redux";

// import { IState, selectors, setNextChord } from "./reducers";
import { IProps } from "./types";

const Music = ({ classes }: IProps) => <div className={classes.wholeDiv}>hello there</div>;

const styles = {
  wholeDiv: ({ gridStyle }: IProps) => {
    return {
      ...gridStyle,
    };
  },
};

// const mapStateToProps = (state: IState): IStateToProps => ({
//   stateVar: selectors.getStateVar(state),
// });

// const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => ({
//   dispatchFunction: () => dispatch({ type: "YOUR_ACTION" }),
// });

// export default connect<IStateToProps, IDispatchToProps, IYourComponentProps>(
//   mapStateToProps,
//   mapDispatchToProps,
// )(injectSheet(styles)(YourComponent));

export default injectSheet(styles)(Music);

import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import { multiclass } from "../utils";
import Chord from "./Chord";
import { randomChord } from "./Chord/utils";
import Metronome from "./Metronome";
import { selectors, setNextChord } from "./reducers";
import { IUkulelePracticeProps } from "./types";

let buttonClicked = false;
const clickButton = () => (buttonClicked = !buttonClicked);
const classPicker = (classes) => {
  return buttonClicked
    ? multiclass(classes.fullScreen, classes.wholeDiv)
    : multiclass(classes.partialScreen, classes.wholeDiv);
};

const UkulelePractice = ({ classes, chordCurrent, chordNext, onBeat }: IUkulelePracticeProps) => (
  <div className={classPicker(classes)}>
    <div className={classes.chordDiv}>
      <Chord chord={chordCurrent} />
      <Chord chord={chordNext} />
    </div>
    <Metronome onBeat={onBeat} />
    <button onClick={clickButton}>Click here</button>
  </div>
);

const styles = {
  chordDiv: {
    alignContent: "flext-start",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  fullScreen: {
    height: "calc(100vh - 18px)",
    width: "calc(100vw - 18px)",
  },
  partialScreen: {
    width: "100%",
  },
  wholeDiv: ({ gridStyle }) => {
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

const mapStateToProps = (state: any, props: any) => {
  return {
    chordCurrent: selectors.getChordCurrent(state),
    chordNext: selectors.getChordNext(state),
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    onBeat: () => {
      dispatch(setNextChord(randomChord()));
    },
  };
};

// const SmartPractice = compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   ),
//   injectSheet(styles),
//   Practice,
// ) as any;

const temp = injectSheet(styles)(UkulelePractice);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(temp);

// export default SmartPractice;

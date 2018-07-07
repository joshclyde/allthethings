import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import Chord from "../Chord";
import { randomChord } from "../Chord/utils";
import Metronome from "../Metronome";
import { NEXT_CHORD } from "./reducers";
import { IPracticeProps } from "./types";

let buttonClicked = false;
const clickButton = () => buttonClicked = !buttonClicked;
const Practice = ({
  classes,
  chordCurrent,
  chordNext,
  onBeat,
}: IPracticeProps) => (
  <div className={buttonClicked ? classes.fullScreen + " " + classes.wholeDiv : classes.partialScreen + " " + classes.wholeDiv}>
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
    width: 300,
  },
  fullScreen: {
    height: "calc(100vh - 18px)",
    width: "calc(100vw - 18px)",
  },
  partialScreen: {
    width: 300,
  },
  wholeDiv: {
    alignContent: "flext-start",
    alignItems: "flex-start",
    border: "1px solid black",
    display: "flex",
    flexDirection: "col",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "8px",
  },
};

const mapStateToProps = (state: any, props: any) => {
  return {
    chordCurrent: state.practice.chordCurrent,
    chordNext: state.practice.chordNext,
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    onBeat: () => {
      dispatch({ type: NEXT_CHORD, chord: randomChord() });
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

const temp = injectSheet(styles)(Practice);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(temp);

// export default SmartPractice;

import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import { multiclass } from "../utils";
import Chord from "./Chord";
import { randomChord } from "./Chord/utils";
import Metronome from "./Metronome";
import { selectors, setNextChord } from "./reducers";
import { IDispatchToProps, IProps, IStateToProps, IUkulelePracticeProps } from "./types";

let buttonClicked = false;
const clickButton = () => (buttonClicked = !buttonClicked);
const classPicker = (classes) => {
  return buttonClicked
    ? multiclass(classes.fullScreen, classes.wholeDiv)
    : multiclass(classes.partialScreen, classes.wholeDiv);
};

const UkulelePractice = ({ classes, chordCurrent, chordNext, onBeat }: IProps) => (
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

const mapStateToProps = (state: any): IStateToProps => ({
  chordCurrent: selectors.getChordCurrent(state),
  chordNext: selectors.getChordNext(state),
});

const mapDispatchToProps = (dispatch: any): IDispatchToProps => ({
  onBeat: () => dispatch(setNextChord(randomChord())),
});

export default connect<IStateToProps, IDispatchToProps, IUkulelePracticeProps>(
  mapStateToProps,
  mapDispatchToProps,
)(injectSheet(styles)(UkulelePractice));

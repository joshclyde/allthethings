import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "redux";
import Chord from "../Chord";
import Metronome from "../Metronome";
import { IPracticeProps } from "./types";
import { NEXT_CHORD } from "./reducers";
import { randomChord } from "../Chord/utils";

const Practice = ({
  classes,
  chordCurrent,
  chordNext,
  onBeat,
}: IPracticeProps) => (
  <div className={classes.wholeDiv}>
    <div className={classes.chordDiv}>
      <Chord chord={chordCurrent} />
      <Chord chord={chordNext} />
    </div>
    <Metronome onBeat={onBeat} />
  </div>
);

const styles = {
  wholeDiv: {
    width: 300,
    border: "1px solid black",
    display: "flex",
    flexDirection: "col",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flext-start",
  },
  chordDiv: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flext-start",
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

const SmartPractice = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectSheet(styles),
  Practice,
) as any;

const temp = injectSheet(styles)(Practice);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(temp);

// export default SmartPractice;

import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "redux";
import Chord from "../Chord";
import Metronome from "../Metronome";
import { IPracticeProps } from "./types";

const Practice = ({
  classes,
  chordCurrent,
  chordNext,
}: IPracticeProps) => (
  <div>
  <div className={classes.theDiv} >
    <Chord chord={chordCurrent} />
    <Chord chord={chordNext} />
    </div>
    <Metronome />
  </div>
);


const styles = {
  theDiv: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
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
export default connect(mapStateToProps, mapDispatchToProps)(temp);

// export default SmartPractice;

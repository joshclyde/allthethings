import * as React from "react";
import { connect } from "react-redux";
import { IChordProps } from "./types";
import { getChordString } from "./utils";

const Chord = ({ chord }: IChordProps) => (
  <div>
    <pre>{getChordString(chord)}</pre>
  </div>
);

const mapStateToProps = (state: any, props: any) => {
  return {
    chord: state.chords.chord,
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return;
};

const SmartChord = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chord);

// export default SmartChord;
export default Chord;

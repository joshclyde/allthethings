export const NEXT_CHORD = "NEXT_CHORD";
export const DO_TICK = "DO_TICK";

const reducers = (
  state = {
    chordCurrent: "C",
    chordNext: "G",
  },
  action: {
    type: undefined,
    chord: undefined,
  },
) => {
  // console.log("hellllo");
  switch (action.type) {
    case NEXT_CHORD:
      return {
        ...state,
        chordCurrent: state.chordNext,
        chordNext: action.chord,
      };
    case DO_TICK:
      return {
        ...state,
        chordCurrent: state.chordNext,
        chordNext: state.chordCurrent,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;

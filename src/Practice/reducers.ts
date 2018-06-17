export const NEXT_CHORD = "NEXT_CHORD";

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
    default:
      return {
        ...state,
      };
  }
};

export default reducers;

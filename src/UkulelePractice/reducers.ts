export const NEXT_CHORD = "NEXT_CHORD";

const reducers = (
  state = {
    chordCurrent: "C",
    chordNext: "G",
  },
  action: {
    type: undefined;
    chord: undefined;
  },
) => {
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

const getPractice = (state) => state.practice || {};
const getChordCurrent = (state) => getPractice(state).chordCurrent;
const getChordNext = (state) => getPractice(state).chordNext;

const selectors = {
  getPractice,
  getChordCurrent,
  getChordNext,
};

export { reducers as practice, selectors };

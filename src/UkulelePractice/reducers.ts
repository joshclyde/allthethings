// actions and action creators
const SET_NEXT_CHORD = "SET_NEXT_CHORD";
export const setNextChord = (chord: string) => ({ type: SET_NEXT_CHORD, chord });

// reducers
export const practice = (
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
    case SET_NEXT_CHORD:
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

// selectors
const getPractice = (state) => state.practice || {};
const getChordCurrent = (state) => getPractice(state).chordCurrent;
const getChordNext = (state) => getPractice(state).chordNext;

export const selectors = {
  getPractice,
  getChordCurrent,
  getChordNext,
};

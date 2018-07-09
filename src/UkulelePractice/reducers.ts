// actions and action creators
const SET_NEXT_CHORD = "SET_NEXT_CHORD";
export const setNextChord = (chord: string) => ({ type: SET_NEXT_CHORD, chord });

// types of state and actions
interface IState {
  chordCurrent: string;
  chordNext: string;
}

interface IActions {
  type: string;
  chord: string;
}

// initial state
const initialState: IState = {
  chordCurrent: "C",
  chordNext: "G",
};

// reducer functions
const doSetNextChord = (state: IState, chord: string) => ({
  ...state,
  chordCurrent: chord,
  chordNext: state.chordCurrent,
});

// reducers
export const practice = (state = initialState, action: IActions) => {
  switch (action.type) {
    case SET_NEXT_CHORD:
      return doSetNextChord(state, action.chord);
    default:
      return { ...state };
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

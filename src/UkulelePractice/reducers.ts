// actions and action creators
const SET_NEXT_CHORD = "SET_NEXT_CHORD";
export const setNextChord = (chord: string) => ({ type: SET_NEXT_CHORD, chord });

// types of state and actions
interface IPracticeState {
  chordCurrent: string;
  chordNext: string;
}

interface IActions {
  type: string;
  chord: string;
}

// initial state
const initialState: IPracticeState = {
  chordCurrent: "C",
  chordNext: "G",
};

// reducer functions
const doSetNextChord = (state: IPracticeState, chord: string) => ({
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
export interface IState {
  practice: IPracticeState;
}

const getPractice = (state: IState) => state.practice || {} as IPracticeState;
const getChordCurrent = (state: IState) => getPractice(state).chordCurrent;
const getChordNext = (state: IState) => getPractice(state).chordNext;

export const selectors = {
  getPractice,
  getChordCurrent,
  getChordNext,
};

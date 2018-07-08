// actions and action creators
export const INIT_METRONOME = "INIT_METRONOME";
export const initMetronome = (bpm: number) => ({ type: INIT_METRONOME, bpm });

export const TICK = "TICK";
export const tick = () => ({ type: TICK });

export const DECREMENT_BPM = "DECREMENT_BPM";
export const decrementBpm = () => ({ type: DECREMENT_BPM });

export const INCREMENT_BPM = "INCREMENT_BPM";
export const incrementBpm = () => ({ type: INCREMENT_BPM });

export const ADD_BPM = "ADD_BPM";
export const addBpm = (bpmAdd: number) => ({ type: ADD_BPM, bpmAdd });

export const SET_TIME_NUMERATOR = "SET_TIME_NUMERATOR";
export const setTimeNumerator = (timeNumerator: number) => ({ type: SET_TIME_NUMERATOR, timeNumerator });

// types of state and actions
interface IState {
  beat: number;
  bpm: number;
  timeNumerator: number;
}

interface IActions {
  type: string;
  bpm: number;
  bpmAdd: number;
  timeNumerator: number;
}

// initial state
const initialState: IState = {
  beat: 1,
  bpm: 120,
  timeNumerator: 4,
};

// reducer functions
const doInitMetronome = (state: IState, bpm: number): IState => ({
  ...state,
  bpm,
});

const doTick = (state: IState): IState => ({
  ...state,
  beat: (state.beat + 1) % state.timeNumerator,
});

const doAddBpm = (state: IState, bpmAdd): IState => ({
  ...state,
  bpm: state.bpm + bpmAdd,
});

const doSetTimeNumerator = (state: IState, timeNumerator): IState => ({
  ...state,
  beat: 1,
  timeNumerator,
});

// reducer
export const metronome = (state = initialState, action: IActions) => {
  switch (action.type) {
    case INIT_METRONOME:
      return doInitMetronome(state, action.bpm);
    case TICK:
      return doTick(state);
    case DECREMENT_BPM:
      return doAddBpm(state, -1);
    case INCREMENT_BPM:
      return doAddBpm(state, 1);
    case ADD_BPM:
      return doAddBpm(state, action.bpmAdd);
    case SET_TIME_NUMERATOR:
      return doSetTimeNumerator(state, action.timeNumerator);
    default:
      return { ...state };
  }
};

// selectors
const getMetronome = (state): IState => state.metronome || {};
const getBeat = (state) => getMetronome(state).beat;
const getBpm = (state) => getMetronome(state).bpm;
const getTimeNumerator = (state) => getMetronome(state).timeNumerator;

export const selectors = {
  getMetronome,
  getBeat,
  getBpm,
  getTimeNumerator,
};

export const INITIALIZE_METRONOME = "INITIALIZE_METRONOME";
export const TICK = "TICK";
export const DECREMENT_BPM = "DECREMENT_BPM";
export const INCREMENT_BPM = "INCREMENT_BPM";
export const ADD_BPM = "ADD_BPM";
export const SET_TIME_NUMERATOR = "SET_TIME_NUMERATOR";

const reducers = (
  state = {
    bpm: 120,
    timeNumerator: 4,
    beat: 1
  },
  action: {
    type: undefined;
    bpm: 120;
    time: 0;
    bpmNumber: 0;
    timeNumerator: 4;
  }
) => {
  switch (action.type) {
    case INITIALIZE_METRONOME:
      return {
        ...state,
        bpm: action.bpm
      };
    case TICK:
      return {
        ...state,
        beat: (state.beat + 1) % state.timeNumerator
      };
    case DECREMENT_BPM:
      return {
        ...state,
        bpm: state.bpm - 1
      };
    case INCREMENT_BPM:
      return {
        ...state,
        bpm: state.bpm + 1
      };
    case ADD_BPM:
      return {
        ...state,
        bpm: state.bpm + action.bpmNumber
      };
    case SET_TIME_NUMERATOR:
      return {
        ...state,
        timeNumerator: action.timeNumerator,
        beat: 1
      };
    default:
      return {
        ...state
      };
  }
};

export default reducers;

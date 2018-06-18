export const SET_CURRENT_TICK = "SET_CURRENT_TICK";
export const INITIALIZE_METRONOME = "INITIALIZE_METRONOME";
export const DECREMENT_BPM = "DECREMENT_BPM";
export const INCREMENT_BPM = "INCREMENT_BPM";
export const ADD_BPM = "ADD_BPM";

const reducers = (
  state = {
    bpm: 120,
    currentTick: 0,
    previousTick: 0,
    nextTick: 0,
  },
  action: {
    type: undefined,
    bpm: 120,
    time: 0,
    bpmNumber: 0,
  },
) => {
  switch (action.type) {
    case INITIALIZE_METRONOME:
      return {
        ...state,
        bpm: action.bpm,
        currentTick: action.time,
        previousTick: action.time,
        nextTick: calculateNextTick(action.bpm, action.time),
      };
    case SET_CURRENT_TICK:
      const moveTick = action.time >= state.nextTick;
      return {
        ...state,
        currentTick: action.time,
        previousTick: moveTick ? state.nextTick : state.previousTick,
        nextTick: moveTick ? calculateNextTick(state.bpm, state.nextTick) : state.nextTick,
      };
    case DECREMENT_BPM:
      return {
        ...state,
        bpm: state.bpm - 1,
      };
    case INCREMENT_BPM:
      return {
        ...state,
        bpm: state.bpm + 1,
      };
    case ADD_BPM:
      return {
        ...state,
        bpm: state.bpm + action.bpmNumber,
      }
    default:
      return {
        ...state,
      };
  }
};

const calculateNextTick = (bpm: number, tick: number) => {
  console.log(tick);
  console.log(bpm);
  return tick + (60 / bpm * 1000);
};

export default reducers;

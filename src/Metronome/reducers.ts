export const SET_CURRENT_TICK = "SET_CURRENT_TICK";
export const INITIALIZE_METRONOME = "INITIALIZE_METRONOME";

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
    default:
      return {
        ...state,
      };
  }
};

const calculateNextTick = (bpm: number, tick: number) => {
  return tick + 1000;
};

export default reducers;

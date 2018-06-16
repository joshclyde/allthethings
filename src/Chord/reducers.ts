export const SET_CHORD = "SET_CHORD";

const reducers = (state = { chord: "C" }, action: {type: undefined}) => {
  
  switch (action.type) {
    case SET_CHORD:
      return {
        ...state,
        chord: "C",
      };
    default:
      return {
        ...state,
        chord: "C",
      };
  }
};

export default reducers;

// actions and action creators
const YOUR_ACTION_NAME = "YOUR_ACTION_NAME";
export const setYourActionName = (actionVar: string) => ({ type: YOUR_ACTION_NAME, actionVar });

// types of state and actions
interface IState {
  stateVar: string;
}

interface IActions {
  type: string;
  actionVar: string;
}

// initial state
const initialState: IState = {
  stateVar: "hello",
};

// reducer functions
const doYourActionName = (state: IState, actionVar: string) => ({
  ...state,
  stateVar: actionVar,
});

// reducers
export const yourReducerName = (state = initialState, action: IActions) => {
  switch (action.type) {
    case YOUR_ACTION_NAME:
      return doYourActionName(state, action.actionVar);
    default:
      return { ...state };
  }
};

// selectors
const getYourReducerName = (state) => state.yourReducerName || {};
const getActionVar = (state) => getYourReducerName(state).actionVar;

export const selectors = {
  getYourReducerName,
  getActionVar,
};

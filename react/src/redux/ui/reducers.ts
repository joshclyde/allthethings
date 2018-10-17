import { SET_HEIGHT, SET_SIZE, SET_WIDTH } from "./actions";
import { IActions, IUiState } from "./types";

const initialState: IUiState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const ui = (state = initialState, action: IActions) => {
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: action.height,
      };
    case SET_SIZE:
      return {
        ...state,
        width: action.width,
        height: action.height,
      };
    default:
      return { ...state };
  }
};

import { IState, IUiState } from "./types";

const getUi = (state: IState) => state.ui || ({} as IUiState);
const getWidth = (state: IState) => getUi(state).width;
const getHeight = (state: IState) => getUi(state).height;

export const selectors = {
  getUi,
  getWidth,
  getHeight,
};

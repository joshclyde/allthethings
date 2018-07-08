import { reducers as metronomeReducers } from "./Metronome";
import { practice } from "./reducers";
const reducers = {
  ...metronomeReducers,
  practice,
};

export { reducers };
export { selectors } from "./reducers";
export { default } from "./UkulelePractice";
export { IUkulelePracticeProps } from "./types";

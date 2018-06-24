import * as React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import Practice from "../Practice";
import { reducers as practiceReducers } from "../Practice";
import { reducers as metronomeReducers } from "../Metronome";

const reducers = combineReducers({
  // chords: chordReducers,
  practice: practiceReducers,
  metronome: metronomeReducers,
});

// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
// this line is so i can see the redux store
const store = createStore(
  reducers, /* preloadedState, */
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <div>
    <Provider store={store}>
      <Practice />
    </Provider>
  </div>
);

export default App;

import * as React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { reducers as metronomeReducers } from "../Metronome";
import Practice, { reducers as practiceReducers } from "../Practice";
import TileGrid from "../TileGrid";

const reducers = combineReducers({
  // chords: chordReducers,
  metronome: metronomeReducers,
  practice: practiceReducers,
});

// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
// this line is so i can see the redux store
const store = createStore(
  reducers /* preloadedState, */,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const PracticeComponent = <Practice />;

const App = () => (
  <div>
    <Provider store={store}>
      <TileGrid width="1000" height="600" />
    </Provider>
  </div>
);

export default App;

import * as React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
// import { reducers as metronomeReducers } from "../Metronome";
import TileGrid from "../TileGrid";
import { reducers as practiceReducers } from "../UkulelePractice";

const reducers = combineReducers({
  // chords: chordReducers,
  ...practiceReducers,
});

// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
// this line is so i can see the redux store
const store = createStore(
  reducers /* preloadedState, */,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

// const PracticeComponent = <UkulelePractice />;

const App = () => (
  <div>
    <Provider store={store}>
      {/* TODO make innerWidth and innerHeight redux */}
      <TileGrid width={window.innerWidth} height={window.innerHeight} />
    </Provider>
  </div>
);

export default App;

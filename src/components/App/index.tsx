import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { combineReducers, createStore } from "redux";

import { reducers as allReducers } from "../../redux";
import { setSize } from "../../redux/ui/actions";
import Bookmarks from "../Bookmarks";
import TileGrid from "../TileGrid";
import { reducers as practiceReducers } from "../UkulelePractice";

const reducers = combineReducers({
  ...allReducers,
  ...practiceReducers,
});

const store = createStore(
  reducers,
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  // this line is so i can see the redux store
  // tslint:disable-next-line: no-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

window.addEventListener("resize", () => {
  store.dispatch(setSize(window.innerWidth, window.innerHeight));
});

const RouteTileGrid = () => <TileGrid width={window.innerWidth} height={window.innerHeight} />;
const RouteBookmarks = () => <Bookmarks nothing="" />;
const RouteHi = () => <div>ahisdhfliasjdklfjsadlkfj</div>;

const App = () => (
  <div>
    <Provider store={store}>
      {/* TODO make innerWidth and innerHeight redux */}
      <div>
        <Switch>
          <Route exact={true} path="/hi" component={RouteHi} />
          <Route exact={true} path="/" component={RouteTileGrid} />
          <Route component={RouteBookmarks} />
        </Switch>
      </div>
    </Provider>
  </div>
);

export default App;

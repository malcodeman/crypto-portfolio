import { createStore } from "redux";

import rootReducer from "./rootReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState({
    settings: store.getState().settings,
    portfolios: store.getState().portfolios,
  });
});

export default store;

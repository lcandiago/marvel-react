import { createStore } from 'redux';

import { loadState, saveState } from '../services/localStorage';
import rootReducer from './modules/rootReducer';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState({
    characters: store.getState().characters,
  });
});

export default store;

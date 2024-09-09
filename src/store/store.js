import { createStore, combineReducers } from 'redux';
import playerReducer from '../reducers/playerReducer';
import scoreReducer from '../reducers/scoreReducer';

const rootReducer = combineReducers({
  score: scoreReducer,
  players: playerReducer
});

const store = createStore(rootReducer);

export default store;

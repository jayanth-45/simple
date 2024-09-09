import { UPDATE_SCORE } from '../actions/scoreActions';

const initialState = {
  teamA: 0,
  teamB: 0
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        [action.payload.team]: state[action.payload.team] + action.payload.runs
      };
    default:
      return state;
  }
};

export default scoreReducer;

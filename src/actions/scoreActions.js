export const UPDATE_SCORE = 'UPDATE_SCORE';

export const updateScore = (team, runs) => ({
  type: UPDATE_SCORE,
  payload: { team, runs }
});



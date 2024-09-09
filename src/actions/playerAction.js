export const UPDATE_PLAYER_STATS='UPDATE_PLAYER-STATS';
export const updatePlayerStats=(playerId,runs,wickets)=>({
    type:UPDATE_PLAYER_STATS,
    playload:{playerId,runs,wickets}
});
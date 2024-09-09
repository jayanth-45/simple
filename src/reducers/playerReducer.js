import { UPDATE_PLAYER_STATS } from '../actions/playerAction';
const intialState={
    players:{}
};
const playerReducer=(state=intialState,action)=> {
    switch(action.type){
        case UPDATE_PLAYER_STATS:
            const {playerId,runs,wickets}=action.playload;
            return{
                ...state,
                players:{
                    ...state.players,
                    [playerId]:{
                        ...(state.players[playerId] || {}),
                        runs:(state.players[playerId]?.runs||0)+runs,
                        wickets:(state.players[playerId]?.wickets||0)+wickets,
                    }
                }
            };
            default: return state;
    }
};
export default playerReducer;
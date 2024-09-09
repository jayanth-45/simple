import React from "react";
import { connect } from "react-redux";
const Scoreboard=({teamA,teamB})=>(
    <div>
        <h1>Match Scoreboard</h1>
        <div>Team A:{teamA}</div>
        <div>Team B:{teamB}</div>
    </div>
);
const mapStateToProps=(state)=>({
    teamA:state.score.teamA,
    teamB:state.score.teamB
});
export default connect(mapStateToProps)(Scoreboard);
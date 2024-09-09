import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateScore } from '../actions/scoreActions';

const ScoreUpdater = ({ updateScore }) => {
  const [team, setTeam] = useState('teamA');
  const [runs, setRuns] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedRuns = parseInt(runs, 10);
    if (!isNaN(parsedRuns) && parsedRuns >= 0) {
      updateScore(team, parsedRuns);
      setRuns('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={team} onChange={(e) => setTeam(e.target.value)}>
        <option value="teamA">Team A</option>
        <option value="teamB">Team B</option>
      </select>
      <input
        type="number"
        value={runs}
        onChange={(e) => setRuns(e.target.value)}
        min="0"
        placeholder="Enter runs"
      />
      <button type="submit">Update Score</button>
    </form>
  );
};

const mapDispatchToProps = {
  updateScore
};

export default connect(null, mapDispatchToProps)(ScoreUpdater);

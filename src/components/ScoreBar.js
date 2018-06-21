import React from 'react';
import './components.css'

const ScoreBar = props => (
    <div className="scorebar">
        <nav className="navbar scorebar fixed-top navbar-light bg-warning row">
            <div className="score-keeper">Score: {props.score}</div>
        </nav>
    </div>  
);
console.log(ScoreBar)
export default ScoreBar;
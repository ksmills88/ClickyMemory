import React, { Component } from 'react';
import './components.css'


class JumboTron extends Component {
    render() {
      return (
        <div className="jumbotron bg-light text-dark">
            
                <h1 className="display-4">Office Memory</h1>
                {/* <p className="lead">This is a simple Memory Game based on characters from the hit series "The Office"</p> */}
                <hr className="my-4" />
                <h3 className="display-6">Rules of the Game </h3>
                <p>Click each character ONLY once. If you click a character that has been clicked before, the game restarts and your score goes down to zero. Each time you click on a character that hasn't been clicked before, your score goes up +1 point. Once your score reaches 12, you win the game!</p>
           
        </div>
      );
    }
  }
  
  export default JumboTron;
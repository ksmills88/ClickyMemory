import React, { Component } from 'react';


class JumboTron extends Component {
    render() {
      return (
        <div class="jumbotron">
            <h1 class="display-4">Office Memory</h1>
            <p class="lead">This is a simple Memory Game based on characters from the hit series "The Office"</p>
            <hr class="my-4" />
            <h3 class="display-6">Rules of the Game </h3>
            <p>Click each character ONLY once. If you click a character that has been clicked before, the game restarts and your score goes down to zero. Each time you click on a character that hasn't been clicked before, your score goes up +1 point. Once your score reaches 15, you win the game!</p>

        </div>
      );
    }
  }
  
  export default JumboTron;
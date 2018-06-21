import React, { Component } from 'react';
import Profile from "./../characters.json"
import Squares from "./Squares"
import ScoreBar from "./ScoreBar"
import './components.css'

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);



const charData = Profile;
console.log(charData)

class Images extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0
            },
            characters: shuffleArray (charData)
        };
    }

    onCharClick = (index) => {
        if( !this.state.characters[index].clicked){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) => {
                    return (current === index) ? {...character, clicked:true} : character
                })),
                user: {...this.state.user, score: this.state.user.score + 1
                }
                
            });
            if(this.state.user.score === 11){
                    alert("You Won!");
                    this.setState({
                        user: {...this.state.user, score: 0}
                    })
            }
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => {return {...character, clicked: false}
                })),
                user: {...this.state.user, score: 0}
            });
            alert("You lose! Play again")

        }
        

    }

    render() {
      return (
        <div className="images container">
          <ScoreBar
            score= {this.state.user.score}   />
          
          <Squares
            characters={this.state.characters}
            onCharClick={this.onCharClick} />
 

        </div>
      );
    }
  }
  
  export default Images;
  
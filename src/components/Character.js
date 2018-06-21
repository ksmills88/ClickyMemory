import React, { Component } from 'react';
import './components.css'


class Character extends Component {

    handleClick = () => {
        this.props.onCharClick(this.props.index);
    }

    render(){ return(
        <div className="col square">
            <div className="character ">
                <img 
                   
                    src={this.props.character.img} 
                    className="character"
                    alt="Office Character"
                    onClick={this.handleClick}/>
            </div>
        </div>
    )
    }
}

export default Character;
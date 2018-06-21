import React from 'react';
import './components.css'
import Character from './Character';

const Square = (props) => {
    return(
        <div className="characterBox row">
            { 
                props.characters.map( (character, index) => 
                    <Character 
                        character={character}   
                        index={index} 
                        onCharClick={props.onCharClick} 
                        key={character.name} />) }
        </div>
    )
};

export default Square;
import React, { Component } from 'react'

export default class AllCharacters extends Component {
    state = {
        characters: []
    }

    render() {
        const { characters } = this.state;

        return (
           <ul>
               {characters.map(character => (
                   <li key={character.id}>
                       <p>{character.name}</p>
                   </li>
               ))}
           </ul>
        );
    }
}

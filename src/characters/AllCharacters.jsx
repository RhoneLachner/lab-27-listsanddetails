import { json } from 'express';
import React, { Component } from 'react'

export default class AllCharacters extends Component {
    state = {
        characters: []
    }

    componentDidMount() {
        fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
        .then(res => res.json())
        .then(res => this.setState({ characters: json.results }));
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

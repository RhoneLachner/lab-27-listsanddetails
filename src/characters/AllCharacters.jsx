import { json } from 'express';
import React, { Component } from 'react'
import { getCharacters } from './xFilesApi';
import CharacterList from './CharacterList';

export default class AllCharacters extends Component {
    state = {
        characters: []
    }

    componentDidMount() {
       getCharacters()
        .then(characters => this.setState({ characters }));
    }

    render() {
        const { characters } = this.state;

        return (
            <>
                <CharacterList characters={characters} />
           </>
        );
    }
}

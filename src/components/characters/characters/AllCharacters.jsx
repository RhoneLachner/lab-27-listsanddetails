import React, { Component } from 'react'
import { getCharacters } from './heyArnoldApi';
import CharacterList from '../characters/CharacterList';
import '../../../app/App.css';
import Clickable from '../../../app/Clickable';


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
        console.log(characters, 'state')

        return (
            <>
                <CharacterList characters={characters} />
            </>
        );
    }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
    const characterElements = characters.map(character => (
        <li key={character.id}>
            <Character {...character} />
        </li>

    ));

    return (
        <ul>
            {characterElements}
        </ul>
    );
};

CharacterList.PropTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired
};
export default CharacterList

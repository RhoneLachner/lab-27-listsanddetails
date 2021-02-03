import React from 'react';
import PropTypes from 'prop-types';
import Character from '../characters/Character';
import '../../../app/App.css'

const CharacterList = ({ characters }) => {
    const characterElements = characters.map(character => (
        <li key={character._id}>
            <Character {...character} />
        </li>
    ));

    return (
        <ul>
            {characterElements}
        </ul>
    );
};

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired
};
export default CharacterList

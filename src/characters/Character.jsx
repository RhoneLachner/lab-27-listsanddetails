import React from 'react';
import PropTypes from 'prop-types';


const Character = ({ name, status, born, occupation, affiliations }) => {
    return (
    <dl>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Status</dt>
        <dd>{status}</dd>

        <dt>Born</dt>
        <dd>{born}</dd>

        <dt>Occupation</dt>
        <dd>{occupation}</dd>

        <dt>Affiliations</dt>
        <dd>{affiliations}</dd>
    </dl>
    );
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    born: PropTypes.number,
    occupation: PropTypes.string,
    affiliations: PropTypes.string,
}

export default Character;

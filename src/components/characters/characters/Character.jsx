import React from 'react';
import PropTypes from 'prop-types';
import '../../../app/App.css';

import { Link } from 'react-router-dom';
import Details from '../../containers/Details';

const Character = ({ name, image, _id }) => (
    <figure>
         <Link to={`/details/${_id}`}>
         <img src={image} alt={name} />
         </Link>
         <figcaption>{name}</figcaption>
    </figure>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;

import React from 'react';
import PropTypes from 'prop-types';

const Clickable = ({ onClick }) => (
  <button onClick={onClick}>Click Here</button>
);

Clickable.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Clickable;

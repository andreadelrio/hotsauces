import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sauce = (props) => (
  <div className="trial">
    <Link to={`/hotsauce/${props.id}`}>
      <p>{props.title}</p>
    </Link>
  </div>
);

Sauce.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Sauce;

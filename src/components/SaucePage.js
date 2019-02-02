import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SaucePage = (props) => {
  const sauceId = parseInt(props.match.params.sauceId);
  const sauceIndex = props.sauces.findIndex(
    (sauce) => sauce.id === sauceId
  );

  const sauce = props.sauces.length > 0 && props.sauces[sauceIndex];

  if (sauceIndex > -1) {
    return (
      <main>
        <p>{sauce.title}</p>
        <p>{sauce.subtitle}</p>
        <p>{sauce.description}</p>
      </main>
    );
  } else {
    return (
      <h5>Oops! No hot sauce to see here.</h5>
    )
  }

  return null;
};

SaucePage.propTypes = {
  sauces: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default SaucePage;

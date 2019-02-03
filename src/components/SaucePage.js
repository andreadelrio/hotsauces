import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -.5rem;
  margin-left: -.5rem;
`;

const SaucePage = (props) => {
  const sauceId = parseInt(props.match.params.sauceId);
  const sauceIndex = props.sauces.findIndex(
    (sauce) => sauce.id === sauceId
  );

  const sauce = props.sauces.length > 0 && props.sauces[sauceIndex];

  if (sauceIndex > -1) {
    return (
      <Container>
        <main>
          <p>{sauce.title}</p>
          <p>{sauce.subtitle}</p>
          <p>{sauce.description}</p>
        </main>
      </Container>
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

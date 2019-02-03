import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const Main = styled.div`
  flex-basis: 70%;
  box-sizing: border-box;
  padding-right: .5rem;
  padding-left: 2rem;
  padding-bottom: 3rem;
  padding-top: 1rem;
  background: #fff; 
  a {
    display: block;
    text-decoration: none;
    color: #2e3131;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`;

const Aside = styled.div`
  flex-basis: 30%;
  box-sizing: border-box;
  padding-right: .5rem;
  padding-left: .5rem;
  word-break: break-word;
  p {
    padding: 0 1rem;
    line-height: 1.3;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-top: 1rem;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto 1em;
  padding-top: 3rem;
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
        <Main>
          <Link to={`/`}>&lt; Back to Awesome Hot Sauce List</Link>
          <Title>{sauce.title}</Title>
          <Img src={sauce.imageURL} alt={sauce.title} />
        </Main>
        <Aside>
          <p>{sauce.description}</p>
        </Aside>
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

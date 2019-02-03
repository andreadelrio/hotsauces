import React from 'react';
import PropTypes from 'prop-types';
import Sauce from './Sauce';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.5rem;
`;

const Container = styled.div`
  h1 {
    font-size: 2rem;
    margin-top: 0;
    padding-top: 1.5rem;
    padding-left: 2.5rem;
    @media (max-width: 700px) {
      font-size: 1.2rem;
      padding-left: 2.5rem; 
    }
  }
`;

const List = (props) => (
  <Container>
    <h1>AWESOME HOT SAUCE LIST</h1>
    <Grid>
      {props.sauces.map((sauce) => (
        <Sauce
          key={sauce.id}
          {...sauce}
          removeHotSauce={props.removeHotSauce}
        />
      ))}
    </Grid>
  </Container>
);

List.propTypes = {
  sauces: PropTypes.array.isRequired,
};

export default List;

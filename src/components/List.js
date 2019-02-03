import React from 'react';
import PropTypes from 'prop-types';
import Sauce from './Sauce';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -.5rem;
  margin-left: -.5rem;
`;

const List = (props) => (
  <Grid>
    {props.sauces.map((sauce) => (
      <Sauce
        key={sauce.id}
        {...sauce}
        removeHotSauce={props.removeHotSauce}
      />
    ))}
  </Grid>
);

List.propTypes = {
  sauces: PropTypes.array.isRequired,
};

export default List;

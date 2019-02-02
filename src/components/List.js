import React from 'react';
import PropTypes from 'prop-types';
import Sauce from './Sauce';

const Home = (props) => (
  <main>
    <div>
      {props.sauces.map((hotsauce) => (
        <Sauce
          key={hotsauce.id}
          {...hotsauce}
          removeHotSauce={props.removeHotSauce}
        />
      ))}
    </div>
  </main>
);

Home.propTypes = {
  hotsauces: PropTypes.array.isRequired,
  removeHotSauce: PropTypes.func.isRequired
};

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import List from './List';
import SaucePage from './SaucePage';

const Router = (props) => (
  <Switch>
    <Route 
    	exact
    	path="/"
    	render={() => <List {...props} />} 
    />
    <Route
      path="/hotsauce/:sauceId"
      render={(obj) => (
        <SaucePage sauces={props.sauces} match={obj.match} />
      )}
    />
  </Switch>
);

Router.propTypes = {
  sauces: PropTypes.array.isRequired
};

export default Router;

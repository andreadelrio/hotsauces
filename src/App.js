import React, { Component } from 'react';
import Router from './components/Router';
import Header from './components/Header';
import API from "./api";
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sauces: []
    };
    this.removeHotSauce = this.removeHotSauce.bind(this);
  }

  removeHotSauce(id) {
    const updatedSauces = Array.from(this.state.sauces);
    const sauceIndex = updatedSauces.findIndex((hotsauce) => hotsauce.id === id);

    if (sauceIndex > -1) {
     updatedSauces.splice(sauceIndex, 1);
    }

    this.setState({ sauces: updatedSauces });
  }

  componentDidMount() {
    let component = this;
    API.getData().then(function(data) {
      component.setState({
        sauces: data.list,
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Router {...this.state} removeHotSauce={this.removeHotSauce} />
      </Wrapper>
    );
  }
}

export default App;

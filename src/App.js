import React, { Component } from 'react';
import Router from './components/Router';
import Header from './components/Header';
import API from "./api";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sauces: []
    };
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
      <div className="App">
        <Header />
        <Router {...this.state} />
      </div>
    );
  }
}

export default App;

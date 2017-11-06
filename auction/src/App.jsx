import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home';

export default class App extends Component {
  static PropTypes = {
    user: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Home />
    );
  }
}


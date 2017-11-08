import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Home from './pages/home';

@inject('bidder')
export default class App extends Component {
  static PropTypes = {
    user: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      user: props.bidder.currentUser
    }
  }

  checkUser() {
    console.log(this.props.bidder.currentUser)
  }

  render() {

    return (
      <Home name={this.checkUser.bind(this)} />
    );
  }
}


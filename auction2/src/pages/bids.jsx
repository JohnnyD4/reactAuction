import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Menu from '../components/menu'
import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

@inject('bids', 'bidder')
export default class Bids extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		// console.log(this);
		return (
			<Menu />
			// <h1>{this.props.bidder.currentUser}</h1>
			)
	}
}
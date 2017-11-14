import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

@inject('bidder')
export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			user: '',
		}
		this.setUser = this.setUser.bind(this);
		this.onEnter = this.onEnter.bind(this);
	}

	setUser(event) {
		this.setState ({
			user: event.target.value
		})
		// console.log(this.state);
	}

	onEnter(event) {
		if (event.keyCode === 13) {
			// console.log(this.state);
			document.getElementById('user').innerHTML = 'Welcome, ' + this.state.user;
			this.props.bidder.getUser(this.state.user);
			this.props.history.push('/bids/2');
		}

	}
	render() {
		
		return (
			<div>
				<Input label='Name' handler={this.setUser} value={this.state.user} onKeyDown={this.onEnter} placeholder='Username' />
				<p id="user"></p>
			</div>
			)
	}
}
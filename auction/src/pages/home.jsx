import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

export default class Home extends Component {
	constructor() {
		super();
		this.state ={
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
			console.log(this.state);
		}
	}
	render() {
		return (
			<div>
				<Input label='Name' handler={this.setUser} value={this.state.user} onKeyDown={this.onEnter} placeholder='Username' />
				
			</div>
			)
	}
}
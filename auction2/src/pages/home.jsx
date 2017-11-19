import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { StyleSheet, css } from 'aphrodite/no-important';

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
			this.props.history.push('/bids');
		}

	}
	render() {
		const style = StyleSheet.create({
			body: {
				overflow: 'hidden'
			},
			container: {
				backgroundColor: 'lightBlue',
			},
			home: {
				width: '200px',
				margin: 'auto',
				textAlign: 'center',
				marginTop: '100px',
				paddingBottom: '280px',
			},
			header: {
				padding: '60px',
				textAlign: 'center',
				marginTop: '0px'
			}
		})
		
		return (
			<div className={css(style.container)}>
			<h1 className={css(style.header)}>Welcome to the React Auction! Where the components react just as fast as you do!</h1>
				<div className={css(style.home)}>
					<Input
						type= 'text'
						handler={this.setUser}
						value={this.state.user}
						onKeyDown={this.onEnter}
						placeholder='Username'
						reason='home'
					/>
					<p id="user"></p>
				</div>
			</div>
			)
	}
}
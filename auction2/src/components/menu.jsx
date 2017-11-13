import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

@inject('bids', 'bidder')
export default class Menu extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const style = StyleSheet.create({
			menu: {
				backgroundColor: '#222fff',
				height: '300px',
				margin: '-30px',
				padding: '40px'
			},
			user: {
				color: 'white'
			}
		})

		return (
			<div className={css(style.menu)}>
			<h1 className={css(style.user)}>{this.props.bidder.currentUser}sdf</h1>
			</div>
			)
	}
}
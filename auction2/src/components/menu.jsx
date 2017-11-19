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
				height: '100px',
				padding: '40px',
				position: 'relative',
			},
			user: {
				color: 'white',
				textAlign: 'center',
			},
			userDiv: {
				// border: '2px solid',
				float: 'left',
				minWidth: '120px',
				position: 'absolute',
				bottom: '10px',
				left: '80px'
			},
			prodDiv: {
				position: 'relative',
				width: '300px',
				margin: '0 auto',
				bottom: '40px',
			},
			highBid: {
				// border: '2px solid',
				position: 'absolute',
				bottom: '10px',
				right: '80px',
			}

		})

		return (
			<div className={css(style.menu)}>
				<div className={css(style.userDiv)}>
					<h2 className={css(style.user)}>{this.props.user}</h2>
				</div>
				<div className={css(style.prodDiv)}>
					<h1 className={css(style.user)}>{this.props.product}</h1>
					<p>{this.props.description}</p>
				</div>

				<div className={css(style.highBid)}>
				<h2 className={css(style.user)}>Highest Bid: ${this.props.highBid}</h2>
				</div>
			</div>
			)
	}
}
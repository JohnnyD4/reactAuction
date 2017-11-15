import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

@inject('bids', 'bidder')
export default class newBid extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const style = StyleSheet.create({
			container: {
				width: '20%',
				height: '300px',
				position: 'absolute',
				top: '300px',
				right: '30px',
				border: '1px solid',
			}
		})
		return (
			<div className={css(style.container)}>
				newBid
			</div>
			)
	}
}
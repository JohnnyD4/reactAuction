import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

@inject('bids', 'bidder')
export default class bidList extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const style = StyleSheet.create({
			container: {
				width: '20%',
				height: '400px',
				border: '1px solid',
				float: 'left',
				marginLeft: '20px',
			}
		})
		return (
			<div className={css(style.container)}>
				bidList
			</div>
			)
	}
}
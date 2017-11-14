import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export default class Button extends Component {

	static PropTypes = {
		handler: PropTypes.func.isRequired,
		label: PropTypes.string.isRequired,

	}

	constructor(props) {
		super(props);
		this.state = {
			value: props.initialValue,
			type: 'text',

		}

	}
	render() {
		const style = StyleSheet.create({
			btn: {
				cursor: 'pointer',
				marginTop: '40px',
				backgroundColor: 'grey',
				padding: '5px 10px',
				width: '100px',
				borderRadius: '10%'
			}
		})

		return (
			<div
				role='button'
				onClick={this.props.onClick}
				className={css(style.btn)}
			>
			{this.props.BtnName}	
			</div>
		)}
}
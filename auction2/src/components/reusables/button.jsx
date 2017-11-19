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
		let style;
		if (this.props.reason === 'bid') {
			style = StyleSheet.create({
				btn: {
					cursor: 'pointer',
					backgroundColor: 'green',
					width: '150px',
					height: '150px',
					padding: '20px',
					textAlign: 'center',
					float: 'left',
					margin: '30px 20px',
				}
			})

		} else if (this.props.reason === 'list') {
			style = StyleSheet.create({
				btn: {
					cursor: 'pointer',
					backgroundColor: 'white',
					textAlign: 'center',
					border: '1px solid black',
					padding: '10px'
				}
			})

		} else {
			style = StyleSheet.create({
				btn: {
					cursor: 'pointer',
					marginTop: '40px',
					backgroundColor: 'grey',
					padding: '5px 10px',
					width: '100px',
					borderRadius: '10%'
				}
			})
		}
		
		

		return (
			<div
				role='button'
				onClick={this.props.onClick}
				className={css(style.btn)}
				reason={this.props.reason}
			>
			{this.props.BtnName}	
			</div>
		)}
}
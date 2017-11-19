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
					borderBottom: '1px solid lightGray',
					padding: '10px'
				}
			})

		} else {
			style = StyleSheet.create({
				btn: {
					cursor: 'pointer',
					margin: '20px',
					backgroundColor: 'lightGray',
					padding: '5px 10px',
					minWidth: '100px',
					borderRadius: '25px',
					textAlign: 'center',
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
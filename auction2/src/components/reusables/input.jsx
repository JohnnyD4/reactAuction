import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export default class Input extends Component {

	static PropTypes = {
		handler: PropTypes.func.isRequired,
		label: PropTypes.string.isRequired,

	}

	constructor(props) {
		super(props);
		this.state = {
			value: props.initialValue,
			type: props.type,

		}

	}
	render() {
		const style = StyleSheet.create({
			input: {
				height: '30px',
				border: 'none',
				borderBottom: '1px solid',
				fontSize: '25px',
				background: 'none',
				':focus': {
					outline: 'none',
				}
			}
		})

		return (
			<div>
				<p>{this.props.label}</p>
				<input
					className={css(style.input)}
					type={this.state.type}
					value={this.state.value}
					onChange={this.props.handler}
					onKeyDown={this.props.onKeyDown}
					placeholder={this.props.placeholder}
				/>
			</div>
		)}
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

// @inject('bidder')
export default class Home extends Component {
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
		console.log(this);
		return (
			<div>
				<p>{this.props.label}</p>
				<input
					type={this.state.type}
					value={this.state.value}
					onChange={this.props.handler}
					onKeyDown={this.props.onKeyDown}
					placeholder={this.props.placeholder}
				/>
			</div>
		)}
}
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
		this.state = {
			newBid: '',
		}

		this.postBid = this.postBid.bind(this);
	}

	setNewBid(event) {
		
		this.setState({
			newBid: event.target.value
		})

	}

	postBid(val) {
		this.props.bids.postBid(Number(val));
		// this.props.bids.getBid(this.props.bids.prodId);
		this.props.history.push(`/bids/${this.props.bids.prodId}`);

	}

	render() {
		const style = StyleSheet.create({
			container: {
				width: '20%',
				height: '300px',
				position: 'absolute',
				top: '240px',
				right: '20px',
				border: '1px solid',
				padding: '10px',
				margin: '8px auto',
			}

		})

		return (
			<div className={css(style.container)}>

				<Input
					label='Bid on this product!'
					type='number'
					handler={this.setNewBid.bind(this)}
					value={this.state.newBid}
				/>

				<Button
					BtnName='Post Bid'
					onClick={() => {this.postBid(this.state.newBid)}}
				/>
				{this.props.bids.error}
			</div>
			)
	}
}
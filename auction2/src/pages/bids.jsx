import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Menu from '../components/menu'
import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

@inject('bids', 'bidder')
export default class Bids extends Component {
	constructor(props) {
		super(props);

		this.getProduct = this.getProduct.bind(this);
	}

	componentWillMount() {	
		// console.log(this.props);
	}

	goBack() {
		this.props.history.goBack();
	}

	renderBids() {
		this.props.bids.getAllBids();
		let allBids = this.props.bids.bids;
		const output = allBids.map(bids => (
			<Button
				BtnName={bids.prodName}
				onClick={() => this.getProduct(bids.prodId)}
				reason='bid'
			/>
		))
		return output;

	}

	getProduct(id) {
		console.log(id);
		this.props.history.push(`/bids/${id}`);
	}

	render() {
		
		return (
			<div>
				{/*<Menu 
					user={this.props.bidder.currentUser}
					highBid={this.props.bids.highBid}
					product={this.props.bids.prodName}
					description={this.props.bids.description}
				/>*/}
				<Button 
					onClick={this.goBack.bind(this)}
					BtnName='Back'

				/>

				{this.renderBids()}
			</div>
			
			)
	}
}
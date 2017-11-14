import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Menu from '../components/menu'
import Input from '../components/reusables/input';
import Button from '../components/reusables/button';

@inject('bids', 'bidder')
export default class Bids extends Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		console.log(this.props.match.params.prodId);
		this.props.bids.getBid(this.props.match.params.prodId);
		console.log(this.props);
	}

	goBack() {
		this.props.history.goBack();
	}

	render() {
		
		return (
			<div>
				<Menu user={this.props.bidder.currentUser} highBid={this.props.bids.highBid} product={this.props.bids.prodName} description={this.props.bids.description} />
				<Button onClick={this.goBack.bind(this)} BtnName='Back' />
			</div>
			// <h1>{this.props.bidder.currentUser}</h1>
			)
	}
}
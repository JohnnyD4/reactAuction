import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Menu from '../components/menu'
import Input from '../components/reusables/input';
import Button from '../components/reusables/button';
import BidHistory from '../components/bidHistory';
import BidList from '../components/bidList';
import NewBid from '../components/newBid';

@inject('bids', 'bidder')
export default class BidPage extends Component {
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
				<BidList />
				<BidHistory />
				<NewBid />
			</div>

			)
	}
}
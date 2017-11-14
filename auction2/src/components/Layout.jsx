import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Bids from '../pages/bids';

export default class Layout extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/bids/:prodId' component={Bids} />
				</Switch>	
			</HashRouter>
			)
	}
}
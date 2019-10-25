import React, { Component } from 'react';

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';

import { Router } from '@reach/router';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: 'User007'
		};
	}

	render() {
		return (
			<div>
				<Navigation user={this.state.user} />

				{this.state.user && <Welcome user={this.state.user} />}
				{/* <Router>
					<Home path='/' user={this.state.user} />
				</Router> */}

				<Home user={this.state.user} />
			</div>
		);
	}
}

export default App;

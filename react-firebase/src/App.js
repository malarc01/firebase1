import React, { Component } from 'react';

import Home from './Home';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: 'Me'
		};
	}

	render() {
		return <Home />;
	}
}

export default App;

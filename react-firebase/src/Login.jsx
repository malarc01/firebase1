import React, { Component } from 'react';
// import App

class Login extends Component {
	state = {};
	render() {
		const { user } = this.props;

		return (
			<div className='text-center mt-4'>
				<h1 className='text-primary'>Login</h1>
			</div>
		);
	}
}

export default Login;

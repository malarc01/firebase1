import React, { Component } from 'react';
// import App

class Register extends Component {
	state = {};
	render() {
		const { user } = this.props;

		return (
			<div className='text-center mt-4'>
				<h1 className='text-primary'>Register</h1>
			</div>
		);
	}
}

export default Register;

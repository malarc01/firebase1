import React, { Component } from 'react';
// import App

class Welcome extends Component {
	state = {};
	render() {
		const { user } = this.props;

		return (
			<div className='text-secondary font-weight-bold pl-1 mt-4'>
				<span>{user}</span>,<a href='/' className='font-weight-bold text-primary pl-1'>
					log out
				</a>
			</div>
		);
	}
}

export default Welcome;

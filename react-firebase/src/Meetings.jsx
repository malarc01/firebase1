import React, { Component } from 'react';
// import App

class Meetings extends Component {
	state = {};
	render() {
		const { user } = this.props;

		return (
			<div className='text-center mt-4'>
				<h1 className='text-primary'>Meetings</h1>
			</div>
		);
	}
}

export default Meetings;

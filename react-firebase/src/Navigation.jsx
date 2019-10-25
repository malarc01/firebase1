import React, { Component } from 'react';

// import { FaBeer } from 'react-icons/fa';

class Navigation extends Component {
	state = {};
	render() {
		const user = this.state;
		return (
			<nav className='site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher'>
				<div className='container-fluid'>
					<a href='/' className='navbar-brand'>
						Meeting Log
					</a>
					<div className='navbar-nav ml-auto'>
						{user && (
							<a className='nav-item nav-link' href='/meetings'>
								meetings
							</a>
						)}
						{!user && (
							<a className='nav-item nav-link' href='/login'>
								log in
							</a>
						)}
						{!user && (
							<a className='nav-item nav-link' href='/register'>
								register
							</a>
						)}
						{user && (
							<a className='nav-item nav-link' href='/login'>
								log out
							</a>
						)}
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;

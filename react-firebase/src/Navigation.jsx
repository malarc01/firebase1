import React, { Component } from 'react';

import { FaBeer } from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends Component {
	state = {};
	render() {
		const user = this.state;
		return (
			<nav className='site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher'>
				<div className='container-fluid'>
					<Link to='/' className='navbar-brand'>
						<FaBeer className='mr-1' /> Enter the Dragon
					</Link>
					<div className='navbar-nav ml-auto'>
						{user && (
							<Link className='nav-item nav-link' to='/meetings'>
								meetings
							</Link>
						)}
						{!user && (
							<Link className='nav-item nav-link' to='/login'>
								log in
							</Link>
						)}
						{!user && (
							<Link className='nav-item nav-link' to='/register'>
								register
							</Link>
						)}
						{user && (
							<Link className='nav-item nav-link' to='/login'>
								log out
							</Link>
						)}
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;

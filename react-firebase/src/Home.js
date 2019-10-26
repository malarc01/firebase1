import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
	state = {};
	render() {
		const { user } = this.props;

		const biggerLead = {
			fontSize: 1.4 + 'em',
			fontWeight: 200
		};

		return (
			<div className='container text-center'>
				<div className='row justify-content-center'>
					Hello {user}
					<div className='col-10 col-md-10 col-lg-8 col-xl-7'>
						<div className='display-4 text-primary mt-3 mb-2' style={{ fontSize: 2.8 + 'em' }}>
							Home.js
						</div>
						<p className='lead' style={biggerLead}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit, tempore eos
							aliquid quae, inventore tenetur sit ut quibusdam adipisci sed beatae culpa nobis voluptatem
							ipsam architecto? Voluptates, est cupiditate.
						</p>

						{user === null && (
							<span>
								<button>
									<Link to='/register' className='btn btn-outline-primary mr-2'>
										Register
									</Link>
								</button>
								<Link to='/login' className='btn btn-outline-primary mr-2'>
									Log In
								</Link>
							</span>
						)}

						{user && (
							<Link to='/meetings' className='btn btn-primary'>
								Meetings
							</Link>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

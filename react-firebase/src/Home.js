import React, { Component } from 'react';

class Home extends Component {
	state = {};
	render() {
		const biggerLead = {
			fontSize: 1.4 + 'em',
			fontWeight: 200
		};

		return (
			<div className='container text-center'>
				<div className='row justify-content-center'>
					<div className='col-10 col-md-10 col-lg-8 col-xl-7'>
						<div className='display-4 text-primary mt-3 mb-2' style={{ fontSize: 2.8 + 'em' }}>
							APP PAGE
						</div>
						<p className='lead' style={biggerLead}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit, tempore eos
							aliquid quae, inventore tenetur sit ut quibusdam adipisci sed beatae culpa nobis voluptatem
							ipsam architecto? Voluptates, est cupiditate.
						</p>

						<button>
							<a href='/register' className='btn btn-outline-primary mr-2'>
								Register
							</a>
						</button>
						<a href='/login' className='btn btn-outline-primary mr-2'>
							Log In
						</a>
						<a href='/meetings' className='btn btn-primary'>
							Meetings
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

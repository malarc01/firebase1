import React, { Component } from 'react';
// import App

import './login.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};
	}
	toggleClass = (x) => {
		console.log('SIGN UP CLICKED');
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	};

	signInClick = (e) => {
		// e.preventDefault();
		// let container = document.getElementById('container');
		// container.classList.add('right-panel-active');
		console.log('Sign In Event');
	};

	render() {
		const { user } = this.props;

		return (
			<div className={this.state.active ? 'container right-panel-active' : 'container'} id='container'>
				<div className='form-container sign-up-container'>
					<form action='#'>
						<h1>Create Account</h1>
						<div className='social-container'>
							<a href='facebook.com' className='social'>
								<i className='fab fa-facebook-f' />
							</a>
							<a href='facebook.com' className='social'>
								<i className='fab fa-google-plus-g' />
							</a>
							<a href='facebook.com' className='social'>
								<i className='fab fa-linkedin-in' />
							</a>
							<span>or use your email for registration</span>
							<input type='text' placeholder='Name' />
							<input type='email' placeholder='Email' />
							<input type='password' placeholder='Password' />
							<button onClick={this.toggleClass}>Xign Up</button>
						</div>
					</form>
				</div>
				<div className='form-container sign-in-container'>
					<form action='#'>
						<h1>Sign in</h1>
						<div className='social-container'>
							<a href='facebook.com' className='social'>
								<i className='fab fa-facebook-f' />
							</a>
							<a href='facebook.com' className='social'>
								<i className='fab fa-google-plus-g' />
							</a>
							<a href='facebook.com' className='social'>
								<i className='fab fa-linkedin-in' />
							</a>
						</div>
						<span>or use your account</span>
						<input type='email' placeholder='Email' />
						<input type='password' placeholder='Password' />
						<a href='facebook.com'>Forgot your password?</a>
						<button onClick={this.toggleClass}>Sign In</button>
					</form>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<div className='overlay-panel overlay-left'>
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className='ghost' id='signIn' onClick={this.toggleClass}>
								Gign In
							</button>
						</div>
						<div className='overlay-panel overlay-right'>
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button
								className='ghost'
								id='signUp'
								onClick={this.toggleClass}
								className={this.state.active ? 'ghost right-panel-active' : null}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;

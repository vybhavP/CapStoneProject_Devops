import React from "react";
import ReactDOM from "react-dom";
import { Button, Form, Divider } from "semantic-ui-react";
import { read_cookie } from 'sfcookies';

const cookie_key = "Users";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			email: '', 
			password: '', 
			isLoginFailed: true,
			users: [],
			returnForgotPassword: '' 
		};
	}
	componentDidMount(){
		this.setState({ users: read_cookie(cookie_key) });
		console.log(read_cookie(cookie_key));
		// delete_cookie(cookie_key);
	}
	handleEmailChange(email) {
		this.setState({ 
			email: email.target.value 
		});
	}
	handleForgotEmailChange(forgotEmail) {
		this.setState({ 
			forgotEmail: forgotEmail.target.value 
		});
	}
	handlePasswordChange(password) {
		// console.log(password.target.value);
		this.setState({ 
			password: password.target.value 
		});
	}

	handleAdminFormSubmit() {
		const { email, password, users } = this.state;
		if(this.state.users.length){
			for( let i = 0; i< this.state.users.length; i++){
				// 	console.log(this.state.users[i].firstName)
					if (email === users[i].email && password === users[i].password) {
						this.props.history.push("/user_home");
						this.setState({ 
							isLoginFailed: false 
						});
						// console.log("isLoginFailed success: " + this.state.isLoginFailed);
					}
					else {
						alert('please signup and then signin if you dont have an account');
						this.props.history.push("/user_login");
						this.setState({ 
							isLoginFailed: true,
							email: '',
							password: '' 
						});
					}
				}
		}
		else{
			alert("No users found!! Please signup and then signin")
		}
	}

	clearFormValues() {
		this.setState({ 
			email: "", 
			password: "" 
		});
		ReactDOM.findDOMNode(this.refs.email).focus();
	}

	handleForgotPassword(){
		const listOfUsers = read_cookie(cookie_key);
		let existingUser = false;
		for(var i=0; i<listOfUsers.length;i++){
			if(listOfUsers[i].email === this.state.forgotEmail){
				existingUser = true;
				this.setState({ returnForgotPassword: listOfUsers[i].password}, 
					alert(this.state.returnForgotPassword)
				)
			}
		}
		if(existingUser){
			alert(this.state.returnForgotPassword);
		}
		else{
			alert('No user found, please try with correct email ID')
		}
	}
	render() {
		return (
			<div className="container">
				<div className={"ui positive message hidden"}>
					<div className="header">
						LoggedIn Successfully
					</div>
				</div>
				<Form 
					ref="admin_form" 
					onSubmit={this.handleAdminFormSubmit.bind(this)}
				>
					<Form.Field>
						<label>Email</label>
						<input 
							placeholder='email' 
							type='email' 
							name="email" 
							value={this.state.email} 
							onChange={this.handleEmailChange.bind(this)} 
							ref="email" 
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input 
							placeholder='Password' 
							type='password' 
							name="Password" 
							value={this.state.password} 
							onChange={this.handlePasswordChange.bind(this)} 
							ref="password" 
						/>
					</Form.Field>
					{/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field> */}
					<Button 
						type='submit' 
						ref="submitButton" 
						color='purple'
					>
            			Submit
					</Button>
					<Button 
						type='reset' 
						ref="resetButton" 
						onClick={this.clearFormValues.bind(this)} 
						color='grey'
					>
            Reset
					</Button>
				</Form>
				<Divider horizontal>Forgot Password?</Divider>

				<div className={"ui positive message"}>
					<Form 
						ref="admin_form" 
						onSubmit={this.handleForgotPassword.bind(this)}
					>
						<Form.Field>
							<label>Email</label>
							<input 
								placeholder='email' 
								type='email' 
								name="forgotEmail" 
								value={this.state.forgotEmail} 
								onChange={this.handleForgotEmailChange.bind(this)} 
								ref="forgotEmail" 
							/>
						</Form.Field>
						<Button 
							type='submit'
							color='teal'
						>
							get Password
						</Button>
					</Form>
				</div>
				
			</div>
		);
	}
}


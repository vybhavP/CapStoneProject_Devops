/*eslint-disable no-unused-vars*/
import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Button } from "semantic-ui-react";
import { bake_cookie } from 'sfcookies';

const cookie_key = "Users";

class UserSingup extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			firstname: "", 
			lastname: "", 
			password: "", 
			confirmPassword: "", 
			email:  "",
			users : [] 
		};
	}

	//handleChange = (e, { value }) => this.setState({ value })

	handleFirstNameChange(firstname) {
		this.setState({ 
			firstname: firstname.target.value 
		});
		// console.log(this.state.firstname);
	}

	handleLastNameChange(lastname) {
		this.setState({ 
			lastname: lastname.target.value 
		});
		// console.log(this.state.lastname);
	}

	handlePasswordChange(password) {
		this.setState({ 
			password: password.target.value 
		});
		// console.log(this.state.password);
	}

	handleConfirmPasswordChange(confirmPassword) {
		this.setState({ 
			confirmPassword: confirmPassword.target.value 
		});
		// console.log(this.state.confirmPassword);
	}

	handleEmailChange(email) {
		this.setState({ 
			email: email.target.value 
		});
		// console.log(this.state.email);
	}

	handleSignup() {

		if(this.state.password !== this.state.confirmPassword){
			alert("Password and confirm passwords should match");
		}
		else{
			alert("Signedup successfully \n" + this.state.firstname + "\n" + this.state.lastname + "\n" + this.state.password + "\n" + this.state.confirmPassword + "\n" + this.state.email);
			let user = { 
					firstName : this.state.firstname, 
					lastName : this.state.lastname,
					password : this.state.password,
					confirmPassword : this.state.confirmPassword,
					email : this.state.email	
				}
			this.state.users.push(user);
			bake_cookie(cookie_key, this.state.users);
			this.props.history.push("/user_login");
		}
	}

	clearFormValues() {
    
		// this.setState({ 
		// 	firstname: "", 
		// 	lastname: "", 
		// 	password: "", 
		// 	confirmPassword: "", 
		// 	email:  "" 
		// });
		this.setState({ users: []});
		ReactDOM.findDOMNode(this.refs.firstname).focus();
	}
	render() {
		return (
			<div>
				<Form 
					ref="signup_form" 
					onSubmit={this.handleSignup.bind(this)}
				>
					<Form.Field>
						<label>First Name</label>
						<input 
							placeholder='First Name' 
							type='text' 
							name="firstName" value={this.state.firstname} ref="firstname" onChange={this.handleFirstNameChange.bind(this)} minLength= "3" maxLength= "20" required/>
					</Form.Field>
					<Form.Field>
						<label>Last Name</label>
						<input 
							placeholder='Last Name' 
							type='text' 
							name="lastName" 
							value={this.state.lastname} 
							ref="lastname" 
							onChange={this.handleLastNameChange.bind(this)} 
							minLength= "3" 
							maxLength= "20" 
							required
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input 
							placeholder='Password' 
							type='password' 
							name="password" 
							value={this.state.password} 
							ref="password" 
							onChange={this.handlePasswordChange.bind(this)} 
							minLength= "3" 
							maxLength= "20" 
							required
						/>
					</Form.Field>
					<Form.Field>
						<label>Confirm Password</label>
						<input 
							placeholder='Confirm Password' 
							type='password' 
							name="confirmPassword" 
							value={this.state.confirmPassword} 
							ef="confirmPassword"  
							onChange={this.handleConfirmPasswordChange.bind(this)} 
							minLength= "3" 
							maxLength= "20" 
							required
						/>
					</Form.Field>
					<Form.Field>
						<label>EmailID</label>
						<input 
							placeholder='Email' 
							type='email' 
							name="email" 
							value={this.state.email} 
							ref="userName" 
							onChange={this.handleEmailChange.bind(this)} 
							minLength= "5" 
							maxLength= "30" 
							required
						/>
					</Form.Field>
					{/*<Form.Select fluid label='Gender' options={options} placeholder='Gender' onChange={ this.handleGender.bind(this) }/>*/}
					{/* <Button type='submit'>Submit</Button> */}
					<Button 
						className='signup-btn'
						type='submit' 
						color='purple'
					>
						Signup
					</Button>
					<Button 
						type='reset' 
						ref="resetButton" 
						onClick={this.clearFormValues.bind(this)} 
						color='grey'
						className="resetForm"
					>
						Reset
					</Button>
				</Form>
			</div>
		);}
}

export default UserSingup;

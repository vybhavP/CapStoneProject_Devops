/*eslint-disable no-unused-vars*/
import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import {
	Form,
	Button,
	Label,
	Grid,
	Input,
	Container,
	Message
} from "semantic-ui-react";
import { bake_cookie } from "sfcookies";

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
			users : [],
			isSignedUp: false
		};
	}

	handleFirstNameChange = (firstname) => {
		this.setState({ 
			firstname: firstname.target.value 
		});
	}

	handleLastNameChange = (lastname) => {
		this.setState({ 
			lastname: lastname.target.value 
		});
	}

	handlePasswordChange = (password) => {
		this.setState({ 
			password: password.target.value 
		});
	}

	handleConfirmPasswordChange = (confirmPassword) => {
		this.setState({ 
			confirmPassword: confirmPassword.target.value 
		});
	}

	handleEmailChange = (email) => {
		this.setState({ 
			email: email.target.value 
		});
	}

	handleSignup = () => {
		let {
			firstname,
			lastname,
			password,
			confirmPassword,
			email,
			users
		} = this.state;
		if(password !== confirmPassword){
			alert("Password and confirm passwords should match");
		}
		else{
			let user = { 
				firstName : firstname, 
				lastName : lastname,
				password : password,
				confirmPassword : confirmPassword,
				email : email	
			};
			users.push(user);
			bake_cookie(cookie_key, users);
			this.setState({ isSignedUp : true });
			// this.props.history.push("/user_login");
			this.props.history.push({
				pathname: "/user_login",
				// search: '?query=abc',
				state: {
					isSignedUp: true
				}
			});
		}
	}

	clearFormValues = () => {
		this.setState({
			firstname: "",
			lastname: "",
			password: "",
			confirmPassword: "",
			email: ""
		});
		ReactDOM.findDOMNode(this.refs.firstname).focus();
	}
	showSuccessSignup = () => {
		return(
			<Message
				success
				header="Signed up successfully"
				content="You may now log-in with the email and password you have chosen"
			/>
		);
	}
	hideSuccessSignup = ()=> {
		return(
			<Message
				success
				header="Signed up successfully"
				content="You may now log-in with the email and password you have chosen"
				hidden
			/>
		);
	}
	render() {
		let {
			firstname,
			lastname,
			password,
			confirmPassword,
			email,
			users,
			isSignedUp
		} = this.state;
		return (
			<div>
				{/* {this.showSuccessSignup()} */}
				{isSignedUp ? this.showSuccessSignup(): this.hideSuccessSignup()}
				<Container>
					{/* {this.showSuccessSignup.bind(this)} */}
					<Form 
						ref="signup_form" 
						onSubmit={this.handleSignup.bind(this)}
					>
						<Form.Group widths = 'equal'>
							<Form.Field inline>
								<Grid columns={6}>
									<Grid.Row>

										<Grid.Column width={5}></Grid.Column>

										<Grid.Column>
											<label>First Name</label>
										</Grid.Column>

										<Grid.Column>
											<Input 
												placeholder="First Name" 
												type="text" 
												name="firstName" 
												value={firstname} 
												ref="firstname" 
												onChange={this.handleFirstNameChange.bind(this)} 
												minLength= "3" 
												maxLength= "20" 
												required
											/>
											<Label basic color='red' pointing='left' className="hidden">
												username must be of 3 characters or more
											</Label>
										</Grid.Column>
									</Grid.Row>
								</Grid>							
							</Form.Field>
						</Form.Group>	
						<Form.Group widths = 'equal'>
							<Form.Field inline>
								<Grid columns={6}>
									<Grid.Row>

										<Grid.Column width={5}></Grid.Column>

										<Grid.Column>
											<label>Last Name</label>
										</Grid.Column>

										<Grid.Column>
											<Input 
												placeholder="Last Name" 
												type="text" 
												name="lastName" 
												value={lastname} 
												ref="lastname" 
												onChange={this.handleLastNameChange.bind(this)} 
												minLength= "3" 
												maxLength= "20" 
												required
											/>
										</Grid.Column>
									</Grid.Row>
								</Grid>		
							</Form.Field>
						</Form.Group>
						<Form.Group widths = 'equal'>
							<Form.Field inline>
								<Grid columns={6}>
									<Grid.Row>

										<Grid.Column width={5}></Grid.Column>

										<Grid.Column>
											<label>Password</label>
										</Grid.Column>

										<Grid.Column>
											<Input 
												placeholder="Password" 
												type="password" 
												name="password" 
												value={password} 
												ref="password" 
												onChange={this.handlePasswordChange.bind(this)} 
												minLength= "3" 
												maxLength= "20" 
												required
											/>
										</Grid.Column>
									</Grid.Row>
								</Grid>	
							</Form.Field>
						</Form.Group>
						<Form.Group widths = 'equal'>
							<Form.Field inline>
								<Grid columns={6}>
									<Grid.Row>

										<Grid.Column width={5}></Grid.Column>

										<Grid.Column>
											<label>Confirm Password</label>
										</Grid.Column>

										<Grid.Column>
											<Input 
												placeholder="Confirm Password" 
												type="password" 
												name="confirmPassword" 
												value={confirmPassword} 
												ef="confirmPassword"  
												onChange={this.handleConfirmPasswordChange.bind(this)} 
												minLength= "3" 
												maxLength= "20" 
												required
											/>
										</Grid.Column>
									</Grid.Row>
								</Grid>	
							</Form.Field>
						</Form.Group>
						<Form.Group widths = 'equal'>
							<Form.Field inline>
								<Grid columns={6}>
									<Grid.Row>

										<Grid.Column width={5}></Grid.Column>

										<Grid.Column>
											<label>EmailID</label>
										</Grid.Column>

										<Grid.Column>
											<Input 
												placeholder="Email" 
												type="email" 
												name="email" 
												value={email} 
												ref="userName" 
												onChange={this.handleEmailChange.bind(this)} 
												minLength= "5" 
												maxLength= "30" 
												required
												width = "20"
											/>
										</Grid.Column>
									</Grid.Row>
								</Grid>	
							</Form.Field>
						</Form.Group>
						{/*<Form.Select fluid label="Gender" options={options} placeholder="Gender" onChange={ this.handleGender.bind(this) }/>*/}
						{/* <Button type="submit">Submit</Button> */}
						<Grid columns={1}  >
							<Grid.Row>
								<Grid.Column>
									<Button 
										className="signup-btn"
										type="submit" 
										color="purple"
									>
										Signup
									</Button>
									<Button 
										type="reset" 
										ref="resetButton" 
										onClick={this.clearFormValues.bind(this)} 
										color="grey"
										className="resetForm"
									>
										Reset
									</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid>				
					</Form>
				</Container>
			</div>
		);}
}

export default UserSingup;

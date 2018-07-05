/*eslint-disable no-unused-vars*/
import React from "react";
import ReactDOM from "react-dom";
import {
	Button,
	Form,
	Input,
	Icon,
	Grid,
	Container,
	Message
} from "semantic-ui-react";
import { read_cookie } from "sfcookies";

const cookie_key = "Users";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isLoginFailed: true,
			users: [],
			returnForgotPassword: "",
			isSignedUp: false,
			isLoggedIn: false
		};
	}
	componentDidMount = () => {
		this.setState({
			users: read_cookie(cookie_key),
		});
		if (this.props.location.state) {
			this.setState({
				isSignedUp: this.props.location.state.isSignedUp,
			});
		}
		else{
			this.setState({
				isSignedUp: false
			});
		}
		// delete_cookie(cookie_key);
	}
	handleEmailChange = (email) => {
		this.setState({
			email: email.target.value
		});
	}
	handleForgotEmailChange = (forgotEmail) => {
		this.setState({
			forgotEmail: forgotEmail.target.value
		});
	}
	handlePasswordChange = (password) => {
		this.setState({
			password: password.target.value
		});
	}
	componentWillUnmount = () => {
		// alert("component will ummount");
		this.setState({
			isLoggedIn: false,
			isSignedUp:false
		});
	}
	handleAdminFormSubmit = () => {
		const { email, password, users } = this.state;
		if (users.length) {
			for (let i = 0; i < users.length; i++) {
				if (email === users[i].email && password === users[i].password) {
					// this.props.history.push("/user_home");
					this.props.history.push({
						pathname: "/user_home",
						// search: '?query=abc',
						state: {
							isLoggedIn: true
						}
					});
					this.setState({
						isLoginFailed: false
					});
				}
				else {
					alert("please signup and then signin if you dont have an account");
					this.setState({
						isLoginFailed: true,
						email: "",
						password: ""
					});
				}
			}
		}
		else {
			alert("No users found!! Please signup and then signin");
		}
	}

	clearFormValues = () => {
		this.setState({
			email: "",
			password: ""
		});
		ReactDOM.findDOMNode(this.refs.email).focus();
	}

	handleForgotPassword = () => {
		let { forgotEmail, returnForgotPassword } = this.state;
		const listOfUsers = read_cookie(cookie_key);
		let existingUser = false;
		for (var i = 0; i < listOfUsers.length; i++) {
			if (listOfUsers[i].email === forgotEmail) {
				existingUser = true;
				this.setState({ returnForgotPassword: listOfUsers[i].password });
			}
		}
		if (existingUser) {
			alert(returnForgotPassword);
		}
		else {
			alert("No user found, please try with correct email ID");
		}
	}
	showHideSuccessSignup = (isSignedUp) => {
		if (isSignedUp) {
			setTimeout(() => {
				this.setState({ isSignedUp: false });
			}, 5000);
			return(
				<Message
					success
					header="Signed up successfully"
					content="You may now log-in with the email and password you have chosen"
				/>
			);			
		}
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
			isSignedUp,
			email,
			password
		} = this.state;
		return (
			<div>
				<Container>

					{
						isSignedUp ? this.showHideSuccessSignup(true) : this.showHideSuccessSignup(false)
					}

					<Form
						ref="admin_form"
						onSubmit={this.handleAdminFormSubmit.bind(this)}
					>
						<Form.Group widths="equal">
							<Form.Field inline>

								<Grid columns={6}>
									<Grid.Row>

										<Grid.Column width={5}></Grid.Column>

										<Grid.Column>
											<label>Email</label>
										</Grid.Column>

										<Grid.Column>
											<Input
												placeholder="email"
												type="email"
												name="email"
												value={email}
												onChange={this.handleEmailChange.bind(this)}
												ref="email"
												iconPosition="left"
											>
												<Icon name="at" color="green" />
												<input />
											</Input>
										</Grid.Column>

									</Grid.Row>
								</Grid>
							</Form.Field>
						</Form.Group>
						<Form.Group widths="equal">
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
												name="Password"
												value={password}
												onChange={this.handlePasswordChange.bind(this)}
												ref="password"
												iconPosition="left"
											>
												<Icon name="user secret" color="teal" />
												<input />
											</Input>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Form.Field>
						</Form.Group>
						{/* <Form.Field inline>
							<Checkbox label="I agree to the Terms and Conditions" />
						</Form.Field> */}
						<Button
							type="reset"
							ref="resetButton"
							onClick={this.clearFormValues.bind(this)}
							color="grey"
							animated="vertical"
						>
							<Button.Content visible>Reset</Button.Content>
							<Button.Content hidden>
								Reset
							</Button.Content>
						</Button>
						<Button
							type="submit"
							ref="submitButton"
							color="purple"
							animated
						>
							<Button.Content visible>Submit</Button.Content>
							<Button.Content hidden>Submit</Button.Content>
						</Button>
					</Form>
					{/* <Divider horizontal>Forgot Password?</Divider> */}

					{/* <div className={"ui positive message"}>
						<Form
							ref="admin_form"
							onSubmit={this.handleForgotPassword.bind(this)}
						>
							<Form.Field>
								<label>Email</label>
								<Input
									placeholder="email"
									type="Enter password recovery Email"
									name="forgotEmail"
									value={this.state.forgotEmail}
									onChange={this.handleForgotEmailChange.bind(this)}
									ref="forgotEmail"
									iconPosition="left"
								>
									<Icon name="at" color="red" />
									<input />
								</Input>
							</Form.Field>
							<Button type="submit" color="teal" animated="fade">
								<Button.Content visible>get Password</Button.Content>
								<Button.Content hidden>get Password</Button.Content>
							</Button>
						</Form>
					</div> */}
				</Container>
			</div>
		);
	}
}


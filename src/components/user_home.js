/*eslint-disable no-unused-vars*/
import React from "react";
import {
	Button,
	Container,
	Message
} from "semantic-ui-react";
import SegmentComponent from "./SegmentComponent";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}
	componentDidMount  = () => {
		if (this.props.location.state) {
			this.setState({
				isLoggedIn: this.props.location.state.isLoggedIn
			});
		} else {
			this.setState({
				isLoggedIn: false
			});
		}
	}
	showHideSuccessLogin = (isLoggedIn) => {
		if (isLoggedIn) {
			setTimeout(() => {
				this.setState({ isLoggedIn: false });
			}, 5000);
			return(
				<Message
					success
					header="Logged in successfully"
					content="You can now Mangage your courses"
				/>
			);			
		}
		return(
			<Message
				success
				header = "Logged in successfully"
				content = "You can now Mangage your courses"
				hidden
			/>
		);
		
	}
	handleLogout = () => {
		this.props.history.push("/");
		this.props.history.push({
			pathname: "/",
			// search: '?query=abc',
			state: {
				isLoggedIn: false,
				isSignedUp: false
			}
		});
	}
	componentWillUnmount = () => {
		this.setState({
			isLoggedIn: false,
			isSignedUp: false
		});
	}
	render() {
		return (
			<div>
				<SegmentComponent header = "Manage Courses" />
				<Container>
					{
						this.state.isLoggedIn ? this.showHideSuccessLogin(true) : this.showHideSuccessLogin(false)
					}
					<Button 
						className = "logout-btn"
						circular 
						icon='sign out alternate red' 
						floated='right' 
						onClick={this.handleLogout.bind(this)}
					/>
					<div 
						className="ui compact vertical labeled icon menu"
					>
						<Link to="/add_course">
							<a className="item">
								<i className="plus square outline icon green"></i>
							ADD Courses
							</a>
						</Link>
						<Link to="/view_courses">
							<a className="item">
								<i className="book icon yellow"></i>
							VIEW Courses
							</a>
						</Link>
						<Link to="/update_course">
							<a className="item">
								<i className="write icon olive"></i>
							UPDATE Courses
							</a>
						</Link>
						<Link to="/delete_course">
							<a className="item">
								<i className="times rectangle icon red"></i>
							DELETE Courses
							</a>
						</Link>
					</div>
				</Container>
			</div>
		);
	}
}

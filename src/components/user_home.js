/*eslint-disable no-unused-vars*/
import React from "react";
import { Button } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default class Login extends React.Component {
	handleLogout(){
		this.props.history.push("/");
	}
	render() {
		return (
			<div class="container">
				<Button 
					className = "logout-btn"
					circular 
					icon='sign out alternate red' 
					floated='right' 
					onClick={this.handleLogout.bind(this)}
				/>
				<div 
					className="ui horizontal divider"
				>
					Manage Courses
				</div>

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
			</div>
		);
	}
}

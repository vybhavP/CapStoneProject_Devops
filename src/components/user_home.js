import React from 'react';
//import { Container, Button } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export default class Login extends React.Component {

	render() {
		return (
			<div>
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
						Add Course
					</a>
					</Link>
					<Link to="/view_courses">
					<a className="item">
						<i className="book icon yellow"></i>
						View Courses
					</a>
					</Link>
					<Link to="/update_course">
					<a className="item">
						<i className="write icon olive"></i>
						Update Courses
					</a>
					</Link>
					<Link to="/delete_course">
					<a className="item">
						<i className="times rectangle icon red"></i>
						Delete Courses
					</a>
					</Link>
				</div>

</div>
		)}
}

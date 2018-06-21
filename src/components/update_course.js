import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import '../App.css'
import UpdateCourses from './UpdateCourses';
// import Products from './Products';

export default class update_course extends React.Component {
render() {
	return (
		<div> 
			<Segment>
				<Header 
					as='h3' 
					textAlign='center'
				>
					Update your courses
				</Header>
			</Segment>
			<UpdateCourses />
		</div>
	)}
}


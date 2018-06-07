import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import '../App.css'
import Products from './Products';


export default class UpdateCourse extends React.Component {
	render() {
		return (
			<div> 
				<Segment>
				    <Header as='h3' textAlign='center'>
				      Update your courses
				    </Header>
				</Segment>
				<Products />
			</div>

		)
	}
}


import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import '../App.css';
import DeleteCourses from './DeleteCourses';

const DeleteCourse = () => (
<div>
	<Segment>
		<Header as='h2' textAlign='center'>
			Delete your courses
		</Header>
	</Segment>
	<DeleteCourses />
</div>
);

export default DeleteCourse;



import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import '../App.css';

import Products2 from './Products2'
const AddCourse = () => (
    <div>
	<Segment>
	    <Header as='h3' textAlign='center'>
	      Add your courses
	    </Header>
	</Segment>
        <Products2 />
    </div>
);

export default AddCourse;



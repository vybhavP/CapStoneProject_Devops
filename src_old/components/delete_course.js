import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import '../App.css';
import Products3 from './Products3';

const DeleteCourse = () => (
    <div>
	<Segment>
	    <Header as='h2' textAlign='center'>
	      Delete your courses
	    </Header>
	</Segment>
        <Products3 />
    </div>
);

export default DeleteCourse;



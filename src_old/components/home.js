import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import '../App.css'
import CourseManagementSystem from '../images/course-management-system.jpg';

const Home = () => (
  <div>
	<Segment>
	    <Header as='h1' textAlign='center'>
	      Welcome !!!
	    </Header>
	</Segment>
    	<img src={CourseManagementSystem} alt="CourseManagementSystem" className="home_page_image" />
  </div>
);

export default Home;



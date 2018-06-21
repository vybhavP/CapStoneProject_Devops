import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import '../App.css';

import react_image_card from '../images/react_card.jpg';
import mongodb_image_card from '../images/mongodb_card.jpg';
import node_image_card from '../images/node_card.jpg';
import express_image_card from '../images/express_card.jpg';

// import courses from '../courses.json';

export default class ViewCourses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.filterText = "";
	}
	handleUserInput(filterText) {
		this.setState({ 
			filterText: filterText 
		});
	};
	handleRowDel(course) {
		var index = this.state.courses.indexOf(course);
		this.state.courses.splice(index, 1);
		this.setState(this.state.courses);
	};

	handleAddEvent(evt) {
		var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
		var course = {
			id: id,
			name: "",
			price: "",
			category: "",
			qty: 0
		}
		this.state.courses.push(course);
		this.setState(this.state.courses);
	}

	handleViewCoursesTable(evt) {
		var item = {
			id: evt.target.id,
			name: evt.target.name,
			value: evt.target.value
		};
		var courses = this.state.courses.slice();
		var newCourses = courses.map(function (course) {

			for (var key in course) {
				if (key === item.name && course.id === item.id) {
					course[key] = item.value;
				}
			}
			return course;
		});
		this.setState({ 
			courses: newCourses 
		});
	};

	render() {
		// const coursesList = courses.courses;
		//console.log(coursesList);
		// var courses_data = () => { for(var i=0;i<coursesList.length;i++){
		// 	console.log(<Table.Row><Table.Cell>coursesList[i].name</Table.Cell>
		// 		<Table.Cell>coursesList[i]</Table.Cell>
		// 	</Table.Row>)
		// 		}
		// }
		//let data = JSON.parse(courses)
		//console.log("data from data.js is ::: " + data.courses);
		return (
			<div>
				<Segment>
					<Header 
						as='h3' 
						textAlign='center'
					>
						List of Available courses
				  </Header>
				</Segment>
				{/* <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} /> */}
				{/* <Table celled textAlign="center">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>S.No</Table.HeaderCell>
							<Table.HeaderCell singleLine>Course Name</Table.HeaderCell>
							<Table.HeaderCell singleLine>Price</Table.HeaderCell>
							<Table.HeaderCell singleLine>Category</Table.HeaderCell>
							<Table.HeaderCell>Course Description</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>
								1
							</Table.Cell>
							<Table.Cell>
								ReactJS
							</Table.Cell>
							<Table.Cell>
								<Label ribbon>Rs.1000</Label>
							</Table.Cell>
							<Table.Cell>
								FrontEnd
							</Table.Cell>
							<Table.Cell>React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community 			of individual developers and corporations.</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								2
							</Table.Cell>
							<Table.Cell>
								ExpressJS
							</Table.Cell>
							<Table.Cell>
								<Label ribbon>Rs.1000</Label>
							</Table.Cell>
							<Table.Cell>
								Middleware
							</Table.Cell>
							<Table.Cell>Express.js is a framework used for Node and it is most commonly used as a web application for node js. Express is 				just a module framework for Node that you can use for applications that are based on server/s that will "listen" for 				any input/connection requests from clients.</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								3
							</Table.Cell>
							<Table.Cell>
								NodeJS
							</Table.Cell>
							<Table.Cell>
								<Label ribbon>Rs.1000</Label>
							</Table.Cell>
							<Table.Cell>
								Backend
							</Table.Cell>
							<Table.Cell>Node.js is a JavaScript runtime built on Chrome s V8 JavaScript engine. Node.js uses an event-driven, 'non-blocking' 				I/O model that makes it lightweight and efficient. npm is a Node.js package of open source library which is largest in 				the world.</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								4
							</Table.Cell>
							<Table.Cell>
								MongoDB
							</Table.Cell>
							<Table.Cell>
								<Label ribbon>Rs.1000</Label>
							</Table.Cell>
							<Table.Cell>
								Database
							</Table.Cell>
							<Table.Cell>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database 			program, MongoDB uses JSON-like documents with schemas.</Table.Cell>
						</Table.Row>

					</Table.Body> */}

					{/*<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan='3'>
						<Menu floated='right' pagination>
							<Menu.Item as='a' icon>
								<Icon name='chevron left' />
							</Menu.Item>
							<Menu.Item as='a'>1</Menu.Item>
							<Menu.Item as='a'>2</Menu.Item>
							<Menu.Item as='a'>3</Menu.Item>
							<Menu.Item as='a'>4</Menu.Item>
							<Menu.Item as='a' icon>
								<Icon name='chevron right' />
							</Menu.Item>
						</Menu>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>*/}
				{/* </Table> */}
<div className="ui link cards container">
  <div className="card">
    <div className="image">
      <img src={react_image_card} alt ="react" />
    </div>
    <div className="content">
      <div className="header">ReactJS</div>
      <div className="meta">
        <a>react</a>
      </div>
      <div className="description">
        React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community 			of individual developers and corporations.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="image">
      <img src={mongodb_image_card} alt ="mongodb" />
    </div>
    <div className="content">
      <div className="header">MongoDB</div>
      <div className="meta">
        <span className="date">mongodb</span>
      </div>
      <div className="description">
        MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database 			program, MongoDB uses JSON-like documents with schemas.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="image">
      <img src={node_image_card} alt ="node" />
    </div>
    <div className="content">
      <div className="header">Node</div>
      <div className="meta">
        <a>node</a>
      </div>
      <div className="description">
        Node.js is a JavaScript runtime built on Chrome s V8 JavaScript engine. Node.js uses an event-driven, 'non-blocking' 				I/O model that makes it lightweight and efficient. npm is a Node.js package of open source library which is largest in 				the world.
      </div>
    </div>
  </div>
<div className="card">
    <div className="image">
      <img src={express_image_card} alt ="expressjs" />
    </div>
    <div className="content">
      <div className="header">ExpressJS</div>
      <div className="meta">
        <a>expressjs</a>
      </div>
      <div className="description">
        Express.js is a framework used for Node and it is most commonly used as a web application for node js. Express is 				just a module framework for Node that you can use for applications that are based on server/s that will "listen" for 				any input/connection requests from clients.
      </div>
    </div>
  </div>


</div>
</div>
		)
	}
}

import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import '../App.css'

const ViewCourses = () => (
    <div>
      <h2>ViewCourses component</h2>
	<Table celled>
	    <Table.Header>
	      <Table.Row>
		<Table.HeaderCell>Course Name</Table.HeaderCell>
		<Table.HeaderCell>Course Description</Table.HeaderCell>
	      </Table.Row>
	    </Table.Header>

	    <Table.Body>
	      <Table.Row>
		<Table.Cell>
		  <Label ribbon>ReactJS</Label>
		</Table.Cell>
		<Table.Cell>React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community 			of individual developers and corporations.</Table.Cell>
	      </Table.Row>
	      <Table.Row>
		<Table.Cell>
			<Label ribbon>ExpressJS</Label>
		</Table.Cell>
		<Table.Cell>Express.js is a framework used for Node and it is most commonly used as a web application for node js. Express is 				just a module framework for Node that you can use for applications that are based on server/s that will "listen" for 				any input/connection requests from clients.</Table.Cell>
	      </Table.Row>
	      <Table.Row>
		<Table.Cell>
			<Label ribbon>NodeJS</Label>
		</Table.Cell>
		<Table.Cell>Node.js is a JavaScript runtime built on Chrome s V8 JavaScript engine. Node.js uses an event-driven, non-blocking 				I/O model that makes it lightweight and efficient. npm is a Node.js package of open source library which is largest in 				the world.</Table.Cell>
	      </Table.Row>
	      <Table.Row>
		<Table.Cell>
			<Label ribbon>MongoDB</Label>
		</Table.Cell>
		<Table.Cell>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database 			program, MongoDB uses JSON-like documents with schemas.</Table.Cell>
	      </Table.Row>
	    </Table.Body>

	    <Table.Footer>
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
	    </Table.Footer>
	  </Table>
    </div>
  );

export default ViewCourses;



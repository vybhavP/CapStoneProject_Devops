import React from 'react';
import { Icon, Label, Menu, Table, Header, Segment } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import '../App.css'

export default class ViewCourses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.products = [];
  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      price: "",
      category: "",
      qty: 0
    }
    this.state.products.push(product);
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {

      for (var key in product) {
        if (key === item.name && product.id === item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
  };
	render() {
		return (
			<div> 
				<Segment>
				    <Header as='h3' textAlign='center'>
				      List of Available courses
				    </Header>
				</Segment>
				{/*<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />*/}
		<Table celled textAlign="center">
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>S.No</Table.HeaderCell>
					<Table.HeaderCell singleLine>Course Name</Table.HeaderCell>
					<Table.HeaderCell>Course Description</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>1</Label>
					</Table.Cell>
					<Table.Cell>
						<Label ribbon>ReactJS</Label>
					</Table.Cell>
					<Table.Cell>React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community 			of individual developers and corporations.</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>2</Label>
					</Table.Cell>
					<Table.Cell>
						<Label ribbon>ExpressJS</Label>
					</Table.Cell>
					<Table.Cell>Express.js is a framework used for Node and it is most commonly used as a web application for node js. Express is 				just a module framework for Node that you can use for applications that are based on server/s that will "listen" for 				any input/connection requests from clients.</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>3</Label>
					</Table.Cell>
					<Table.Cell>
						<Label ribbon>NodeJS</Label>
					</Table.Cell>
					<Table.Cell>Node.js is a JavaScript runtime built on Chrome s V8 JavaScript engine. Node.js uses an event-driven, non-blocking 				I/O model that makes it lightweight and efficient. npm is a Node.js package of open source library which is largest in 				the world.</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>4</Label>
					</Table.Cell>
					<Table.Cell>
						<Label ribbon>MongoDB</Label>
					</Table.Cell>
					<Table.Cell>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database 			program, MongoDB uses JSON-like documents with schemas.</Table.Cell>
				</Table.Row>
			</Table.Body>

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
		</Table>
			</div>

		)
	}
}



{/*
const ViewCourses = () => (
	<div>
        	<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
		<h2>List of Courses</h2>
		<Table celled textAlign="center">
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>S.No</Table.HeaderCell>
					<Table.HeaderCell singleLine>Course Name</Table.HeaderCell>
					<Table.HeaderCell>Course Description</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>1</Label>
					</Table.Cell>
					<Table.Cell>
						<Label ribbon>ReactJS</Label>
					</Table.Cell>
					<Table.Cell>React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community 			of individual developers and corporations.</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>2</Label>
					</Table.Cell>
					<Table.Cell>
						<Label ribbon>ExpressJS</Label>
					</Table.Cell>
					<Table.Cell>Express.js is a framework used for Node and it is most commonly used as a web application for node js. Express is 				just a module framework for Node that you can use for applications that are based on server/s that will "listen" for 				any input/connection requests from clients.</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>3</Label>
					</Table.Cell>
					<Table.Cell>
						<Label ribbon>NodeJS</Label>
					</Table.Cell>
					<Table.Cell>Node.js is a JavaScript runtime built on Chrome s V8 JavaScript engine. Node.js uses an event-driven, non-blocking 				I/O model that makes it lightweight and efficient. npm is a Node.js package of open source library which is largest in 				the world.</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Label ribbon>4</Label>
					</Table.Cell>
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
*/}


import React from 'react';

import SearchBar from './SearchBar';
import UpdateCoursesTable from './UpdateCoursesTable';

export default class UpdateCourses extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.courses = [];
    this.state = {};
    this.state.filterText = "";
    this.state.courses = [
      {
        id: 1,
        category: 'Front End',
        price: '100',
        description: "description of react",
        name: 'reactJS'
      },
      {
        id: 2,
        category: 'Front End',
        price: '100',
        description: "description of react",
        name: 'reactJS'
      },
      {
        id: 3,
        category: 'Front End',
        price: '100',
        description: "description of react",
        name: 'reactJS'
      },
      {
        id: 4,
        category: 'Front End',
        price: '100',
        description: "description of react",
        name: 'reactJS'
      },
      {
        id: 5,
        category: 'Front End',
        price: '100',
        description: "description of react",
        name: 'reactJS'
      },
      {
        id: 6,
        category: 'Front End',
        price: '100',
        description: "description of react",
        name: 'reactJS'
      }, 
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
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

  handleUpdateCoursesTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
var courses = this.state.courses.slice();
  var newCourses = courses.map(function(course) {

    for (var key in course) {
      if (key == item.name && course.id == item.id) {
        course[key] = item.value;

      }
    }
    return course;
  });
    this.setState({courses:newCourses});
  //  console.log(this.state.courses);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <UpdateCoursesTable onProductTableUpdate={this.handleUpdateCoursesTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} courses={this.state.courses} filterText={this.state.filterText}/>
      </div>
    );

  }
}

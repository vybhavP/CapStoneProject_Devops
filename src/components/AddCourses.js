import React from 'react';

import SearchBar from './SearchBar';
import AddCoursesTable from './AddCoursesTable';

export default class AddCourses extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.courses = [];
  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
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
      price: "0",
      category: "",
      description: ""
    }
    this.state.courses.push(course);
    this.setState(this.state.courses);
  }
  
  handleSave(evt) {
    alert("triggered handle save function");
    console.log(this.state.courses)
    var courses = this.state.courses.slice();
    for(var i = 0; i< courses.length; i++){
	console.log(courses[i].id + "\n" + courses[i].name + "\n" + 
	courses[i].price + "\n" + courses[i].category + "\n" + courses[i].description);
    }
  }
  handleAddCoursesTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    console.log(evt)
    var courses = this.state.courses.slice();
    //console.log(courses+" courses")
    var newCourses = courses.map(function (course) {
      console.log(course+"1234")
      for (var key in course) {
        if (key === item.name && course.id === item.id) {
          course[key] = item.value;
        }
      }
      return course;
    });
    this.setState({ courses: newCourses });
  };
  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <AddCoursesTable onAddCoursesTableUpdate={this.handleAddCoursesTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} courses={this.state.courses} filterText={this.state.filterText} onSave={this.handleSave.bind(this)} />
      </div>
    );
  }
}

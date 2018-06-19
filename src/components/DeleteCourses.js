import React from 'react';

import SearchBar from './SearchBar';
import DeleteCoursesTable from './DeleteCoursesTable';

export default class DeleteCourses extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.courses = [];
    this.state = { isDeleted: false };
    this.state.filterText = "";
    this.state.courses = [
      {
        id: 1,
        category: 'Sporting Goods',
        price: '49.99',
        qty: 12,
        name: 'football'
      }, {
        id: 2,
        category: 'Sporting Goods',
        price: '9.99',
        qty: 15,
        name: 'baseball'
      }, {
        id: 3,
        category: 'Sporting Goods',
        price: '29.99',
        qty: 14,
        name: 'basketball'
      }, {
        id: 4,
        category: 'Electronics',
        price: '99.99',
        qty: 34,
        name: 'iPod Touch'
      }, {
        id: 5,
        category: 'Electronics',
        price: '399.99',
        qty: 12,
        name: 'iPhone 5'
      }, {
        id: 6,
        category: 'Electronics',
        price: '199.99',
        qty: 23,
        name: 'nexus 7'
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  };
  handleRowDel(course) {
    var index = this.state.courses.indexOf(course);
    this.state.courses.splice(index, 1);
    this.setState(this.state.courses);
    alert("before delete"+ this.state.isDeleted);
    this.setState({isDeleted: true})
    alert("after delete"+ this.state.isDeleted);
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

  handleDeleteCoursesTable(evt) {
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
    this.setState({ courses: newCourses });
  };
  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <DeleteCoursesTable onDeleteCoursesTableUpdate={this.handleDeleteCoursesTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} courses={this.state.courses} filterText={this.state.filterText} enableSave={this.state.isDeleted} />
      </div>
    );
  }
}

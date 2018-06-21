import React from 'react';
import SearchBar from './SearchBar';
import { AddCoursesTable, DeleteCoursesTable, UpdateCoursesTable } from './CoursesTable';

export const AddCourses =  class AddCourses extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.courses = [];
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
      price: "0",
      category: "",
      description: ""
    }
    this.state.courses.push(course);
    this.setState(this.state.courses);
  }
  
  handleSave(evt) {
    
    console.log(this.state.courses);
    var courses = this.state.courses.slice();
    for(var i = 0; i< courses.length; i++){
	    console.log(courses[i].id + "\n" + courses[i].name + "\n" + 
	    courses[i].price + "\n" + courses[i].category + "\n" + courses[i].description);
    }
    alert("Saved Coures Data!!");
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
      console.log(course)
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
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText} 
          onUserInput={this.handleUserInput.bind(this)} 
        />
        <AddCoursesTable 
          onAddCoursesTableUpdate={this.handleAddCoursesTable.bind(this)} 
          onRowAdd={this.handleAddEvent.bind(this)} 
          onRowDel={this.handleRowDel.bind(this)} 
          courses={this.state.courses} 
          filterText={this.state.filterText} 
          onSave={this.handleSave.bind(this)} 
        />
      </div>
    )};
}

export const DeleteCourses = class DeleteCourses extends React.Component {

    constructor(props) {
      super(props);
  
      //  this.state.courses = [];
      this.state = { 
        isDeleted: false 
      };
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
      this.setState({ 
        filterText: filterText 
      });
    };
    handleRowDel(course) {
      var index = this.state.courses.indexOf(course);
      this.state.courses.splice(index, 1);
      this.setState(this.state.courses);
      this.setState({isDeleted: true});
      alert("Deleted selected row!!")
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
      this.setState({ 
        courses: newCourses 
      });
    };
    render() {
      return (
        <div>
          <SearchBar 
            filterText={this.state.filterText} 
            onUserInput={this.handleUserInput.bind(this)} 
          />
          <DeleteCoursesTable 
            onDeleteCoursesTableUpdate={this.handleDeleteCoursesTable.bind(this)} 
            onRowAdd={this.handleAddEvent.bind(this)} 
            onRowDel={this.handleRowDel.bind(this)} 
            courses={this.state.courses} 
            filterText={this.state.filterText} 
            enableSave={this.state.isDeleted} 
          />
        </div>
    )};
}

export const UpdateCourses = class UpdateCourses extends React.Component {

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

  handleUpdateCoursesTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
  var courses = this.state.courses.slice();
  var newCourses = courses.map(function(course) {  
    for (var key in course) {
      if (key === item.name && course.id == item.id) {
        course[key] = item.value;
      }
    }
    return course;
  });
    this.setState({courses:newCourses});
    // console.log(this.state.courses);
  };
  handleSaveUpdatedCourses(evt) {
    console.log(this.state.courses);
    alert("Saved Updated Data!!!");
  }
  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText} 
          onUserInput={this.handleUserInput.bind(this)}
        />
        <UpdateCoursesTable 
          onUpdateCoursesTableUpdate={this.handleUpdateCoursesTable.bind(this)} 
          onRowAdd={this.handleAddEvent.bind(this)} 
          nRowDel={this.handleRowDel.bind(this)} 
          courses={this.state.courses} 
          filterText={this.state.filterText}
          saveUpdatedCourses = {this.handleSaveUpdatedCourses.bind(this)}
        />
      </div>
  )};
}
  
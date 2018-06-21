import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { AddCoursesRow, DeleteCoursesRow, UpdateCoursesRow } from './CoursesRow';

export const AddCoursesTable = class AddCoursesTable extends React.Component {

  render() {
    var onAddCoursesTableUpdate = this.props.onAddCoursesTableUpdate;
    //var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var course = this.props.courses.map(function (course) {
      if (course.name.indexOf(filterText) === -1) {
        return false;
      }
      return (
        <AddCoursesRow 
          onAddCoursesTableUpdate={onAddCoursesTableUpdate} 
          course={course} 
          key={course.id} 
        />
      )
    });
    return (
      <div>
        {/* Table for Add courses */}
        <Table celled>
          <Table.Header>
	          <Table.Row textAlign='center'>
              <Table.HeaderCell>Course Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Course Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {course}
          </Table.Body>
        </Table>

        {/* 'Add' button to add courses*/}
        <Button 
          primary 
          onClick={this.props.onRowAdd} 
          className="btn btn-success pull-right"
        >
          Add
        </Button>

        {/* 'Save' button to save courses */}
        <Button 
          primary 
          onClick={this.props.onSave} 
          className="btn btn-success pull-right"
        >
          Save
        </Button>
      </div>
    );
  }
}

export const DeleteCoursesTable = class DeleteCoursesTable extends React.Component {

    render() {
      var onDeleteCoursesTableUpdate = this.props.onDeleteCoursesTableUpdate;
      var rowDel = this.props.onRowDel;
      var isSaveEnabled = this.props.enableSave;
      var filterText = this.props.filterText;
      var course = this.props.courses.map(function (course) {
        if (course.name.indexOf(filterText) === -1) {
          return false;
        }
        return (
          <DeleteCoursesRow 
            onDeleteCoursesTableUpdate={onDeleteCoursesTableUpdate} 
            course={course} 
            onDelEvent={rowDel.bind(this)} 
            key={course.id} 
            enableSave={isSaveEnabled}
          />
        )
      });
      return (
        <div>
          <Table celled>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Delete?</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {course}
            </Table.Body>
          </Table>
        </div>
      )};
  }
  
export const UpdateCoursesTable = class UpdateCoursesTable extends React.Component {
    constructor(props) {
      super(props);
  
       this.state = {};
    }
    // onUpdateCoursesData () {
    //   console.log(this.state.updated_courses)
    // }
    render() {
      var onUpdateCoursesTableUpdate = this.props.onUpdateCoursesTableUpdate;
      // var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var course = this.props.courses.map(function (course) {
        if (course.name.indexOf(filterText) === -1) {
          return;
        }
        return (<UpdateCoursesRow onUpdateCoursesTableUpdate={onUpdateCoursesTableUpdate} course={course} key={course.id} />)
      });
      return (
        <div>
  
          {/*<div className="ui horizontal divider">
            Available Courses
          </div>*/}
          <Table celled>
            <Table.Header>
            <Table.Row textAlign='center'>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>price</Table.HeaderCell>
            <Table.HeaderCell>category</Table.HeaderCell>
            <Table.HeaderCell>description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Body>
              {course}
            </Table.Body>       
          </Table>
      <Button color="green" className="btn btn-success pull-right" onClick={this.props.saveUpdatedCourses}>Update</Button>
        </div>
    )};
}
  
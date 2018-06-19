import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import AddCoursesRow from './AddCoursesRow';

export default class AddCoursesTable extends React.Component {

  render() {
    var onAddCoursesTableUpdate = this.props.onAddCoursesTableUpdate;
    //var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var course = this.props.courses.map(function (course) {
      if (course.name.indexOf(filterText) === -1) {
        return false	;
      }
      return (<AddCoursesRow onAddCoursesTableUpdate={onAddCoursesTableUpdate} course={course} key={course.id} />)
    });
    return (
      <div>
        {/*<div className="ui horizontal divider">
          Or
        </div>*/}
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
        <Button primary onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</Button>
        <Button primary onClick={this.props.onSave} className="btn btn-success pull-right">Save</Button>
      </div>
    );
  }
}

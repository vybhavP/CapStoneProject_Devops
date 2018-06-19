import React from 'react';
import { Table } from 'semantic-ui-react';

import DeleteCoursesRow from './DeleteCoursesRow';
export default class DeleteCoursesTable extends React.Component {

  render() {
    var onDeleteCoursesTableUpdate = this.props.onDeleteCoursesTableUpdate;
    var rowDel = this.props.onRowDel;
    var isSaveEnabled = this.props.enableSave;
    var filterText = this.props.filterText;
    var course = this.props.courses.map(function (course) {
      if (course.name.indexOf(filterText) === -1) {
        return false;
      }
      return (<DeleteCoursesRow onDeleteCoursesTableUpdate={onDeleteCoursesTableUpdate} course={course} onDelEvent={rowDel.bind(this)} key={course.id} enableSave={isSaveEnabled}/>)
    });
    return (
      <div>
        <Table celled>
          <Table.Header>
	      <Table.Row textAlign='center'>
		<Table.HeaderCell>Name</Table.HeaderCell>
		<Table.HeaderCell>price</Table.HeaderCell>
		<Table.HeaderCell>quantity</Table.HeaderCell>
		<Table.HeaderCell>category</Table.HeaderCell>
		<Table.HeaderCell>Delete?</Table.HeaderCell>
	      </Table.Row>
	    </Table.Header>
          <Table.Body>
            {course}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

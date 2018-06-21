import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import ProductRow from './ProductRow';

export default class UpdateCoursesTable extends React.Component {
  constructor(props) {
    super(props);

     this.state = {};
  }
  // onUpdateCoursesData () {
  //   console.log(this.state.updated_courses)
  // }
  render() {
    var onUpdateCoursesTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var course = this.props.courses.map(function (course) {
      if (course.name.indexOf(filterText) === -1) {
        return;
      }
<<<<<<< HEAD
      return (<UpdateCoursesRow onUpdateCoursesTableUpdate={onUpdateCoursesTableUpdate} course={course} key={course.id} />)
=======
      return (<ProductRow onProductTableUpdate={onUpdateCoursesTableUpdate} course={course} onDelEvent={rowDel.bind(this)} key={course.id} />)
>>>>>>> f0609b600795c3a6d2610eaf92ff18a8eb057bec
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
    );
  }
}

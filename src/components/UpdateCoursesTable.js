import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import UpdateCoursesRow from './UpdateCoursesRow';

export default class UpdateCoursesTable extends React.Component {

  render() {
    var onUpdateCoursesTableUpdate = this.props.onUpdateCoursesTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function (product) {
      if (product.name.indexOf(filterText) === -1) {
        return false;
      }
      return (<UpdateCoursesRow onUpdateCoursesTableUpdate={onUpdateCoursesTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id} />)
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
		<Table.HeaderCell>quantity</Table.HeaderCell>
		<Table.HeaderCell>category</Table.HeaderCell>
	      </Table.Row>
	    </Table.Header>
          <Table.Body>
            {product}
          </Table.Body>       
        </Table>
	<Button color="green" className="btn btn-success pull-right">Update</Button>
      </div>
    );
  }
}

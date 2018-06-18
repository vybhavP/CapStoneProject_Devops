import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import AddCoursesRow from './AddCoursesRow';

export default class AddCoursesTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    //var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function (product) {
      if (product.name.indexOf(filterText) === -1) {
        return false	;
      }
      return (<AddCoursesRow onProductTableUpdate={onProductTableUpdate} product={product} key={product.id} />)
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
            {product}
          </Table.Body>
        </Table>
        <Button primary onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</Button>
        <Button primary onClick={this.props.onSave} className="btn btn-success pull-right">Save</Button>
      </div>
    );
  }
}

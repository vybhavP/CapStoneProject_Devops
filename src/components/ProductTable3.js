import React from 'react';
import { Table } from 'semantic-ui-react';

import ProductRow3 from './ProductRow3';
export default class ProductTable3 extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function (product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow3 onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id} />)
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
            {product}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

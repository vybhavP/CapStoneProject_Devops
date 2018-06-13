import React from 'react';
import { Input, Table } from 'semantic-ui-react';

import EditableCell3 from './EditableCell3';

export default class ProductRow3 extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
    alert(this.props.enableSave);
  }
  render() {
    return (
      <Table.Row className="eachRow">
        <EditableCell3 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }} />
        <EditableCell3 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "price",
          value: this.props.product.price,
          id: this.props.product.id
        }} />
        <EditableCell3 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "qty",
          value: this.props.product.qty,
          id: this.props.product.id
        }} />
        <EditableCell3 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "category",
          value: this.props.product.category,
          id: this.props.product.id
        }} />
	<Table.Cell className="del-cell" textAlign="center">
          <Input error type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn" />
        </Table.Cell>
      </Table.Row>
    );
  }
}

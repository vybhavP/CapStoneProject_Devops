import React from 'react';
import { Table } from 'semantic-ui-react';
import EditableCell2 from './EditableCell2';

export default class AddCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <Table.Row className="eachRow">
        <EditableCell2 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }} />
        <EditableCell2 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "price",
          value: this.props.product.price,
          id: this.props.product.id
        }} />
        <EditableCell2 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "qty",
          value: this.props.product.qty,
          id: this.props.product.id
        }} />
        <EditableCell2 onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "category",
          value: this.props.product.category,
          id: this.props.product.id
        }} />
      </Table.Row>
    );

  }

}
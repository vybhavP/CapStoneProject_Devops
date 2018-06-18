import React from 'react';
import { Table } from 'semantic-ui-react';
import AddCoursesEditableCell from './AddCoursesEditableCell';

export default class AddCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {

    return (
      <Table.Row className="eachRow">
        <AddCoursesEditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }} />
        <AddCoursesEditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "price",
          value: this.props.product.price,
          id: this.props.product.id
        }} />
        <AddCoursesEditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "category",
          value: this.props.product.category,
          id: this.props.product.id
        }} />
        <AddCoursesEditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "description",
          value: this.props.product.description,
          id: this.props.product.id
        }} />
      </Table.Row>
    );

  }

}

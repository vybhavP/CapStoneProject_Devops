import React from 'react';
import { Table } from 'semantic-ui-react';
import EditableCell from './EditableCell';

export default class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.course);
  }
  render() {
    return (
      <Table.Row className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.course.name,
          id: this.props.course.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "price",
          value: this.props.course.price,
          id: this.props.course.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "category",
          value: this.props.course.category,
          id: this.props.course.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "description",
          value: this.props.course.description,
          id: this.props.course.id
        }} />

      </Table.Row>
    );

  }

}

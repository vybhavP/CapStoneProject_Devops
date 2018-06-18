import React from 'react';
import { Table } from 'semantic-ui-react';
import UpdateCoursesRowEditableCell from './UpdateCoursesRowEditableCell';

export default class UpdateCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {
    return (
      <Table.Row className="eachRow">
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }} />
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          type: "price",
          value: this.props.product.price,
          id: this.props.product.id
        }} />
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          type: "qty",
          value: this.props.product.qty,
          id: this.props.product.id
        }} />
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          type: "category",
          value: this.props.product.category,
          id: this.props.product.id
        }} />
      </Table.Row>
    );

  }

}

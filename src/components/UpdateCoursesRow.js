import React from 'react';
import { Table } from 'semantic-ui-react';
import UpdateCoursesRowEditableCell from './UpdateCoursesRowEditableCell';

export default class UpdateCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.course);
  }
  render() {
    return (
      <Table.Row className="eachRow">
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          "type": "name",
          value: this.props.course.name,
          id: this.props.course.id
        }} />
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          type: "price",
          value: this.props.course.price,
          id: this.props.course.id
        }} />
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          type: "qty",
          value: this.props.course.qty,
          id: this.props.course.id
        }} />
        <UpdateCoursesRowEditableCell onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} cellData={{
          type: "category",
          value: this.props.course.category,
          id: this.props.course.id
        }} />
      </Table.Row>
    );

  }

}

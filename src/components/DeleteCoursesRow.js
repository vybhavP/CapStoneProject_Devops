import React from 'react';
import { Input, Table } from 'semantic-ui-react';

import DeleteCoursesEditableCell from './DeleteCoursesEditableCell';

export default class DeleteCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.course);
    alert(this.props.enableSave);
  }
  render() {
    return (
      <Table.Row className="eachRow">
        <DeleteCoursesEditableCell onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} cellData={{
          "type": "name",
          value: this.props.course.name,
          id: this.props.course.id
        }} />
        <DeleteCoursesEditableCell onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} cellData={{
          type: "price",
          value: this.props.course.price,
          id: this.props.course.id
        }} />
        <DeleteCoursesEditableCell onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} cellData={{
          type: "qty",
          value: this.props.course.qty,
          id: this.props.course.id
        }} />
        <DeleteCoursesEditableCell onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} cellData={{
          type: "category",
          value: this.props.course.category,
          id: this.props.course.id
        }} />
	<Table.Cell className="del-cell" textAlign="center">
          <Input error type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn" />
        </Table.Cell>
      </Table.Row>
    );
  }
}

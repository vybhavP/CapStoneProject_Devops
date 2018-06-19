import React from 'react';
import { Table } from 'semantic-ui-react';
import AddCoursesEditableCell from './AddCoursesEditableCell';

export default class AddCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.course);
  }
  render() {

    return (
      <Table.Row className="eachRow">
        <AddCoursesEditableCell onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} cellData={{
          "type": "name",
          value: this.props.course.name,
          id: this.props.course.id
        }} />
        <AddCoursesEditableCell onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} cellData={{
          type: "price",
          value: this.props.course.price,
          id: this.props.course.id
        }} />
        <AddCoursesEditableCell onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} cellData={{
          type: "category",
          value: this.props.course.category,
          id: this.props.course.id
        }} />
        <AddCoursesEditableCell onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} cellData={{
          type: "description",
          value: this.props.course.description,
          id: this.props.course.id
        }} />
      </Table.Row>
    );

  }

}

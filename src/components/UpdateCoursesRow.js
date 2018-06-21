import React from 'react';
import { Table } from 'semantic-ui-react';
import UpdateCoursesEditableCell from './UpdateCoursesEditableCell';

export default class UpdateCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.course);
  }
  render() {
    return (
      <Table.Row 
        className="eachRow"
      >
        <UpdateCoursesEditableCell 
          onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
            cellData={{
              "type": "name",
              value: this.props.course.name,
              id: this.props.course.id
            }} 
        />
        <UpdateCoursesEditableCell 
          onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
            cellData={{
              type: "price",
              value: this.props.course.price,
              id: this.props.course.id
            }} 
        />
        <UpdateCoursesEditableCell 
          onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
            cellData={{
              type: "category",
              value: this.props.course.category,
              id: this.props.course.id
            }} 
        />
        <UpdateCoursesEditableCell 
          onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
            cellData={{
              type: "description",
              value: this.props.course.description,
              id: this.props.course.id
            }} 
        />

      </Table.Row>
    );

  }

}

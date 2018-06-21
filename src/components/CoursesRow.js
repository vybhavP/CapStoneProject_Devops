import React from 'react';
import { Input, Table } from 'semantic-ui-react';
import { AddCourses, DeleteCourses, UpdateCourses } from './EditableCell';

export const AddCoursesRow = class AddCoursesRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.course);
  }
  render() {
    return (
      <Table.Row className="eachRow">
        <AddCourses 
          onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
          cellData={{
            "type": "name",
            value: this.props.course.name,
            id: this.props.course.id
          }} 
        />
        <AddCourses 
          onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
          cellData={{
            type: "price",
            value: this.props.course.price,
            id: this.props.course.id
          }} 
        />
        <AddCourses 
          onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
          cellData={{
            type: "category",
            value: this.props.course.category,
            id: this.props.course.id
          }} 
        />
        <AddCourses 
          onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
          cellData={{
            type: "description",
            value: this.props.course.description,
            id: this.props.course.id
          }} 
        />
      </Table.Row>
  )};
}

export const DeleteCoursesRow = class DeleteCoursesRow extends React.Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.course);
    }
    render() {
      return (
        <Table.Row 
          className="eachRow"
        >
          <DeleteCourses 
            onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
            cellData={{
              "type": "name",
              value: this.props.course.name,
              id: this.props.course.id
            }} 
          />
          <DeleteCourses 
            onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
            cellData={{
              type: "price",
              value: this.props.course.price,
              id: this.props.course.id
            }} 
          />
          <DeleteCourses 
            onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
            cellData={{
              type: "category",
              value: this.props.course.category,
              id: this.props.course.id
            }} 
          />
          <DeleteCourses 
            onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
            cellData={{
              type: "description",
              value: this.props.course.description,
              id: this.props.course.id
            }} 
          />
          
          <Table.Cell 
            className="del-cell" 
            textAlign="center"
          >
            <Input 
              error 
              type="button" 
              onClick={this.onDelEvent.bind(this)} 
              value="X" 
              className="del-btn" 
            />
          </Table.Cell>
        </Table.Row>
    )};
}
  
export const UpdateCoursesRow = class UpdateCoursesRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.course);
    }
    render() {
        return (
        <Table.Row 
            className="eachRow"
        >
            <UpdateCourses 
            onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
                cellData={{
                "type": "name",
                value: this.props.course.name,
                id: this.props.course.id
                }} 
            />
            <UpdateCourses 
            onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
                cellData={{
                type: "price",
                value: this.props.course.price,
                id: this.props.course.id
                }} 
            />
            <UpdateCourses 
            onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
                cellData={{
                type: "category",
                value: this.props.course.category,
                id: this.props.course.id
                }} 
            />
            <UpdateCourses 
            onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
                cellData={{
                type: "description",
                value: this.props.course.description,
                id: this.props.course.id
                }} 
            />
        </Table.Row>
    )};  
}
  
import React from 'react';
import { Input, Table } from 'semantic-ui-react';

export const AddCourses = class AddCourses extends React.Component {
  render() {
    return (
      <Table.Cell 
        textAlign='center' 
        center 
        aligned
        >
        <Input 
          type='text' 
          name={this.props.cellData.type} 
          id={this.props.cellData.id} 
          value={this.props.cellData.value} 
          onChange={this.props.onAddCoursesTableUpdate} 
          center 
          aligned 
          required
        />
      </Table.Cell>
    )};
}

export const DeleteCourses = class DeleteCourses extends React.Component {
    render() {
      return (
        <Table.Cell 
          textAlign='center'>
            {/*<Input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} disabled red/>*/}
            {this.props.cellData.value}
        </Table.Cell>
      );
    }
  }

export const UpdateCourses = class UpdateCourses extends React.Component {
    render() {
      return (
        <Table.Cell 
          textAlign='center' 
          center 
          aligned
        >
          <Input 
            type='text' 
            name={this.props.cellData.type} 
            id={this.props.cellData.id} 
            value={this.props.cellData.value} 
            onChange={this.props.onUpdateCoursesTableUpdate} 
            center 
            aligned 
            non-editable
          />
            {/*{this.props.cellData.value}*/}
        </Table.Cell>
      );
    }
  }

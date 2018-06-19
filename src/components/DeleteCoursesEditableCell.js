import React from 'react';
import { Table } from 'semantic-ui-react';

export default class DeleteCoursesEditableCell extends React.Component {
  render() {
    return (
      <Table.Cell textAlign='center'>
        {/*<Input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} disabled red/>*/}
	{this.props.cellData.value}
      </Table.Cell>
    );
  }
}

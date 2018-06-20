import React from 'react';
import { Input, Table } from 'semantic-ui-react';

export default class EditableCell extends React.Component {
  render() {
    return (
      <Table.Cell textAlign='center' center aligned>
        <Input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate} center aligned non-editable/>
	{/*{this.props.cellData.value}*/}
      </Table.Cell>
    );
  }
}

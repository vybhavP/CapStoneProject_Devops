import React from 'react';
import { Input } from 'semantic-ui-react';

export default class EditableCell3 extends React.Component {
  render() {
    return (
      <td>
        <Input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} />
      </td>
    );
  }
}

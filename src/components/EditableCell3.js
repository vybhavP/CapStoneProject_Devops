import React from 'react';

export default class EditableCell3 extends React.Component {

  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} />
      </td>
    );

  }

}

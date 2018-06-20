import React from 'react';
import { Form } from 'semantic-ui-react'

export default class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
	<Form>
	  <Form.Field>
        	<input type="text" placeholder="Search for your courses..." width={2} value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)} />
	  </Form.Field>
	</Form>
      </div>
    );
  }

}

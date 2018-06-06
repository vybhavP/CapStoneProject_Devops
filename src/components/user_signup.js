import React, { Component } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'
//import { countryOptions } from '../common'
//countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' } ]

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class UserSingup extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' type='password' />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder='Confirm Password' type='password' />
        </Form.Field>
        <Form.Field>
          <label>EmailID</label>
          <input placeholder='Email' type='email' />
        </Form.Field>
        <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
        {/* <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button> */}
        <Button type='submit' color='purple'>Signup</Button>
        <Button type='reset' color='grey'>Reset</Button>
      </Form>
    )
  }
}

export default UserSingup

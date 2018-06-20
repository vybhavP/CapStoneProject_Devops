import React from 'react'
import { Segment, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginOrSignup = () => (
    <Segment padded>
        <Link to="/user_login">
            <Button color='green' fluid>Login</Button>
        </Link>
        <Divider horizontal>Or</Divider>
        <Link to="/user_signup">
            <Button color='olive' fluid>Sign Up Now</Button>
        </Link>
    </Segment>
)

export default LoginOrSignup

/*eslint-disable no-unused-vars*/
import React from "react";
import {
	Segment,
	Button,
	Divider,
	Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginOrSignup = () => (
	<Segment padded>
		<Link to="/user_login">
			<Button color="green" fluid animated = "fade">
				<Button.Content visible> 
					Login
				</Button.Content> 
				<Button.Content hidden> 
					Login <Icon name = 'right arrow' />
				</Button.Content>
			</Button>
		</Link>
		<Divider horizontal>
            Or
		</Divider>
		<Link to="/user_signup">
			<Button color="olive" fluid animated = "fade">
				<Button.Content visible> 
					Sign Up
				</Button.Content> 
				<Button.Content hidden> 
					Sign Up <Icon name = 'right arrow' />
				</Button.Content>
			</Button>
		</Link>
	</Segment>
);

export default LoginOrSignup;

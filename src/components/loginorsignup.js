/*eslint-disable no-unused-vars*/
import React from "react";
import {
	Segment,
	Button,
	Divider,
	Icon,
	Grid,
	Header,
	Image
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import Logo from "../images/courses.jpg";

const LoginOrSignup = () => (
	<div>
		<Grid Columns={4}>
			<Grid.Row>
				<Grid.Column>
					<Header as= "h2" icon textAlign="center">
						{/* <Icon name="users" circular /> */}
						<Image centered size="large" src={Logo} style={{height:150 , width:"15%"}}/>
						<Header.Content>Course Mangement</Header.Content>
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>

		<Grid columns={4}>
			<Grid.Row>

				<Grid.Column width={6}></Grid.Column>

				<Grid.Column>
					<Segment padded>
						<Link to="/user_login">
							<Button color="green" fluid animated = "fade">
								<Button.Content visible> 
									Login
								</Button.Content> 
								<Button.Content hidden> 
									Login <Icon name = "right arrow" />
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
									Sign Up <Icon name = "right arrow" />
								</Button.Content>
							</Button>
						</Link>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		
	</div>
);

export default LoginOrSignup;

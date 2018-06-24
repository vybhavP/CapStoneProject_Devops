import React from 'react';
import { Header, Segment } from "semantic-ui-react";

const SegmentComponent = (props) => {
    return(
        <div>
            <Segment>
                <Header as='h3' textAlign='center'>
                    {props.header}
                </Header>
            </Segment>
	</div>
    )
}

export default SegmentComponent
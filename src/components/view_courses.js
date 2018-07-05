/*eslint-disable no-unused-vars*/
import React from "react";
import SegmentComponent from "./SegmentComponent";
import { ViewCourses } from "./ManageCourses";

class ViewCourse extends React.Component {
	render(){
		return(
			<div>
				<SegmentComponent header = "Your courses" />
				<ViewCourses />
			</div>
		);
	}
}

export default ViewCourse;
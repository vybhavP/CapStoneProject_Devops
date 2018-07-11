import React from "react";
import SegmentComponent from "./SegmentComponent";
import "../App.css";
import { UpdateCourses } from "./ManageCourses";


export default class update_course extends React.Component {
	render() {
		return (
			<div>
				<SegmentComponent header = "Update your courses" /> 
				<UpdateCourses />
			</div>
		);}
}


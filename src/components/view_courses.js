import React from "react";
import SegmentComponent from "./SegmentComponent";
import { ViewCourses } from "./ManageCourses";

const ViewCourse = () => (
	<div>
		<SegmentComponent header = "Your courses" />
		<ViewCourses />
	</div>
);

export default ViewCourse;
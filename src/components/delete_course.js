/*eslint-disable no-unused-vars*/
import React from "react";
import SegmentComponent from "./SegmentComponent";

import "../App.css";
import { DeleteCourses } from "./ManageCourses";

const DeleteCourse = () => (
	<div>
		<SegmentComponent header = "Delete your courses" />
		<DeleteCourses />
	</div>
);

export default DeleteCourse;



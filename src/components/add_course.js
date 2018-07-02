/*eslint-disable no-unused-vars*/
import React from "react";
import SegmentComponent from './SegmentComponent';

import "../App.css";
import { AddCourses } from "./ManageCourses";

const AddCourse = (props) => (
	<div>
		<SegmentComponent header = "Add your courses" />
		<AddCourses />
	</div>
);

export default AddCourse;



import React from "react";
import { mount, shallow, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import add_course from "../components/add_course";

configure({ adapter: new Adapter() });

const props = {header: "Header test"};
describe("<add_course />", () =>{
	it("add course", ()=>{
		const addCourseComponent = shallow(<add_course />);
		expect(addCourseComponent).toHaveLength(1);
	});
});
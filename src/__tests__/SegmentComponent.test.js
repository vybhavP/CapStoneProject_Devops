import React from "react";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SegmentComponent from "../components/SegmentComponent";

configure({ adapter: new Adapter() });

const props = {header: "Header test"};
describe("Segment header", () =>{
	let segment_component = mount(<SegmentComponent header={props.header} />);
	it("header", ()=>{
		expect(segment_component.find("Header").text()).toEqual(props.header);
	});
});
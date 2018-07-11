import React from "react";
import { mount, shallow, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import home from "../components/home";

configure({ adapter: new Adapter() });

const props = {header: "Header test"};
describe("<home />", () =>{
	it("home", ()=>{
		const homeComponent = shallow(<home />);
		expect(homeComponent).toHaveLength(1);
	});
});
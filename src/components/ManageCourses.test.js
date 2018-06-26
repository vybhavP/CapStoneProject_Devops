import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ManageCourses from './ManageCourses';

configure({ adapter: new Adapter() });

const props = {header: "Header test"}
describe('<ManageCourses />', () =>{
    it('manage courses', ()=>{
        const manageCoursesComponent = shallow(<ManageCourses />)
        console.log(manageCoursesComponent.debug())
        expect(manageCoursesComponent).toHaveLength(1);
    });
});
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import view_courses from './view_courses';

configure({ adapter: new Adapter() });

// const props = {header: "Header test"}
describe('<view_courses />', () =>{
    it('view courses', ()=>{
        const viewCoursesComponent = shallow(<view_courses />)
        console.log(viewCoursesComponent.debug())
        expect(viewCoursesComponent).toHaveLength(1);
    });
});